import express from "express";

// This will help us connect to the database
import db from "../config/connection.js";;

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("questions");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:difficulty", async (req, res) => {
  let collection = await db.collection("questions");
  let query = { difficulty: req.params.difficulty };
  let result = await collection.find(query).toArray();

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export { router as questions };
