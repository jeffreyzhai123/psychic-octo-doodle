import express from 'express'; // Import the Express framework
import bodyParser from 'body-parser'; // Import body-parser middleware
import cors from 'cors'; // Import CORS middleware

import { questions } from './controllers/questions.js';
import { submission } from './controllers/submission.js';


const app = express(); // Create an Express application
const port = 3080; // Define the port number where the server will listen

// Middleware setup
app.use(bodyParser.json()); // Parse incoming JSON requests and populate req.body
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json());

app.use("/questions", questions);
app.use("/submission", submission);

// Start the server and make it listen on the defined port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});