const { db } = require('@vercel/postgres');
const {
    cities,
    actionPlans,
    targets
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedCities(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "cities" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS cities (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        state TEXT NOT NULL
      );
    `;

        console.log(`Created "cities" table`);

        // Insert data into the "cities" table
        const insertedCities = await Promise.all(
            cities.map(async (city) => {
                return client.sql`
        INSERT INTO cities (id, name, state)
        VALUES (${city.id}, ${city.name}, ${city.state})
        ON CONFLICT (id) DO NOTHING;
      `;
            }),
        );

        console.log(`Seeded ${insertedCities.length} cities`);

        return {
            createTable,
            cities: insertedCities,
        };
    } catch (error) {
        console.error('Error seeding cities:', error);
        throw error;
    }
}

async function seedActionPlans(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "action_plans" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS action_plans (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        adoption_date date,
        document_link TEXT,
        page_link TEXT,
        type TEXT,
        city_id VARCHAR(255) NOT NULL
      );
    `;

        console.log(`Created "action_plans" table`);

        // Insert data into the "action_plans" table
        const insertedActionPlans = await Promise.all(
            actionPlans.filter(i => i.adoptionDate).map(async (plan) => {
                const cityId = plan.id.split("_plan_")[0]
                return client.sql`
        INSERT INTO action_plans (id, name, adoption_date, document_link, page_link, type, city_id)
        VALUES (${plan.id}, ${plan.name}, ${plan.adoptionDate ?? 'NULL'}, ${plan.documentLink}, ${plan.pageLink}, ${plan.type}, ${cityId})
        ON CONFLICT (id) DO NOTHING;
      `;
            }),
        );

        // Insert data into the "action_plans" table
        const insertedActionPlansWithNoAdoptionDate = await Promise.all(
            actionPlans.filter(i => !i.adoptionDate).map(async (plan) => {
                const cityId = plan.id.split("_plan_")[0]
                return client.sql`
        INSERT INTO action_plans (id, name, document_link, page_link, type, city_id)
        VALUES (${plan.id}, ${plan.name}, ${plan.documentLink}, ${plan.pageLink}, ${plan.type}, ${cityId})
        ON CONFLICT (id) DO NOTHING;
      `;
            }),
        );

        console.log(`Seeded ${insertedActionPlans.length} action plans`);

        return {
            createTable,
            cities: insertedActionPlansWithNoAdoptionDate,
        };
    } catch (error) {
        console.error('Error seeding action plans:', error);
        throw error;
    }
}

async function seedTargets(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "targets" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS targets (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255),
        plan_id VARCHAR(255) NOT NULL
      );
    `;

        console.log(`Created "targets" table`);

        // Insert data into the "action_plans" table
        const insertedTargets = await Promise.all(
            targets.map(async (target) => {
                const planId = target.actionPlanId
                return client.sql`
        INSERT INTO targets (name, plan_id)
        VALUES (${target.name}, ${planId})
        ON CONFLICT (id) DO NOTHING;
      `;
            }),
        );

        console.log(`Seeded ${insertedTargets.length} targets`);

        return {
            createTable,
            cities: insertedTargets,
        };
    } catch (error) {
        console.error('Error seeding targets:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    // await seedCities(client);
    // await seedActionPlans(client);
    await seedTargets(client);

    await client.end();
}
main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});