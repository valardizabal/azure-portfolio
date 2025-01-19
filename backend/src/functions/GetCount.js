const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos');

// Initialize the Cosmos client
const connectionString = process.env.CosmosDBConnectionString;
const client = new CosmosClient(connectionString);

// Define your database and container names
const databaseId = 'azureportfolio';
const containerId = 'Counter';

app.http('GetCount', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`HTTP function processed request for URL "${request.url}"`);

        try {
            // Retrieve the container
            const container = client.database(databaseId).container(containerId);

            // Read the item from the database (assuming '1' is the id and partition key)
            const { resource: counter } = await container.item('1', '1').read();

            if (!counter) {
                return { status: 404, body: 'Counter document not found.' };
            }

            // Increment the count
            counter.count += 1;

            // Replace the item in the database with the updated count
            await container.item('1', '1').replace(counter);

            return {
                status: 200,
                body: JSON.stringify(counter),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        } catch (error) {
            context.log.error('Error interacting with Cosmos DB:', error);
            return { status: 500, body: 'Internal Server Error' };
        }
    }
});