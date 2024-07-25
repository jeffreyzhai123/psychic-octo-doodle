import express from "express";

// This will help us connect to the database
import db from "../config/connection.js";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("results");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:userid", async (req, res) => {
  let collection = await db.collection("results");
  let query = { userid: req.params.userid };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      userid: req.body.userid,
      results: req.body.results
    };
    let collection = await db.collection("results");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// This section will help you update a record by id.
router.patch("/:userid", async (req, res) => {
  try {
    const query = { userid: req.params.userid };
    const updates = {
      $push: {
        results: req.body.results
      },
    };

    let collection = await db.collection("results");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

export { router as results };
