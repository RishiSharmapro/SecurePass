const express = require('express');
const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');


const url = process.env.MONGODB_URL;
const client = new MongoClient(url);
const dbName = 'securePass';
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
3000;

let db; // will hold the connected DB reference

async function startServer() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    db = client.db(dbName);

    // Get all passwords
    app.get('/', async (req, res) => {
      try {
        const collection = db.collection('passwords');
        const result = await collection.find({}).toArray();
        res.json(result);
      } catch (err) {
        res.status(500).json({ error: 'Failed to fetch passwords' });
      }
    });

    // Save a password
    app.post('/', async (req, res) => {
      try {
        const password = req.body;
        const collection = db.collection('passwords');
        const result = await collection.insertOne(password);
        console.log(password);
        
        res.send({ success: true, result });
      } catch (err) {
        res.status(500).json({ error: 'Failed to save password' });
      }
    });

    // Delete a password
    app.delete('/', async (req, res) => {
      try {
        const password = req.body;
        const collection = db.collection('passwords');
        const result = await collection.deleteOne(password);
        res.send({ success: true, result });
      } catch (err) {
        res.status(500).json({ error: 'Failed to delete password' });
      }
    });

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server running on port:${port}`);
    });

  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log("Closing MongoDB connection...");
  await client.close();
  process.exit(0);
});

startServer();
