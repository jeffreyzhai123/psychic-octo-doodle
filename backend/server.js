import express from 'express'; // Import the Express framework
import bodyParser from 'body-parser'; // Import body-parser middleware
import cors from 'cors'; // Import CORS middleware

import { resultRouter } from './controllers/results.js';


const app = express(); // Create an Express application
const port = 3080; // Define the port number where the server will listen

// Middleware setup
app.use(bodyParser.json()); // Parse incoming JSON requests and populate req.body
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json());
app.use("/results", resultRouter);

// Start the server and make it listen on the defined port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});