import {
    CityRow,
} from './definitions'
import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from "next/cache";


const ITEMS_PER_PAGE = 6;
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
        cities.id,
        cities.name,
        cities.state
      FROM cities
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