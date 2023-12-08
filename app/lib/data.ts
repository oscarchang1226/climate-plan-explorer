import {
    City,
    CityRow,
    ClimatePlan,
    ClimateTarget,
} from './definitions'
import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from "next/cache";


const ITEMS_PER_PAGE = 12;
export async function fetchCitiesPages(query: string) {
    noStore()

    try {
        const count = await sql`SELECT COUNT(*)
    FROM cities
    WHERE
        cities.name ILIKE ${`%${query}%`} OR
        cities.id ILIKE ${`%${query}%`} OR
        cities.state ILIKE ${`%${query}%`}
  `;

        return Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of cities.');
    }
}

export async function fetchFilteredCities(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const cities = await sql<CityRow>`
            SELECT 
                cities.id as id,
                cities.name as name, 
                cities.state as state, 
                COALESCE(city_plans.climate_plan_count,0) as climate_plan_count, 
                COALESCE(city_targets.climate_target_count,0) as climate_target_count 
            FROM 
                cities 
            LEFT JOIN (
                SELECT 
                    city_id, 
                    COUNT(*) as climate_plan_count 
                FROM 
                    action_plans 
                GROUP BY 
                    city_id
            ) as city_plans ON cities.id = city_plans.city_id 
            LEFT JOIN (
                SELECT 
                    city_id, 
                    COUNT(*) as climate_target_count 
                FROM 
                    action_plans 
                LEFT JOIN targets ON targets.plan_id = action_plans.id 
                GROUP BY city_id
            ) as city_targets on cities.id = city_targets.city_id
      WHERE
        cities.name ILIKE ${`%${query}%`} OR
        cities.id ILIKE ${`%${query}%`} OR
        cities.state ILIKE ${`%${query}%`}
      ORDER BY cities.id
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

        return cities.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch cities.');
    }
}

export async function fetchCityById(id: string) {
    noStore()

    try {
        const city = await sql<City>`
            SELECT 
                cities.id as id,
                cities.name as name, 
                cities.state as state
            FROM 
                cities 
            WHERE cities.id = ${id}
    `;

        return city.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch city details.');
    }
}

export async function fetchCityPlansById(id: string) {
    noStore()

    try {
        const plans = await sql<ClimatePlan>`
            SELECT 
                action_plans.id as id,
                action_plans.name as name, 
                action_plans.adoption_date as adoptionDate, 
                action_plans.document_link as documentlink, 
                action_plans.page_link as pagelink
            FROM 
                action_plans 
            WHERE action_plans.city_id = ${id}
    `;

        return plans.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch city plans.');
    }
}

export async function fetchCityTargetsById(id: string) {
    noStore()

    try {
        const targets = await sql<ClimateTarget>`
            SELECT 
                targets.id as id,
                targets.name as name
            FROM 
                action_plans 
            LEFT JOIN targets ON targets.plan_id = action_plans.id 
            WHERE action_plans.city_id = ${id}
    `;

        return targets.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch city targets.');
    }
}