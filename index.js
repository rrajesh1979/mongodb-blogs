const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('tsdb');
    const tscoll = database.collection('normal');

    // Query for a movie that has the title 'Back to the Future'
    const query = { server: 'server-50' };
    const readings = await tscoll.findOne(query);

    console.log(readings);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);