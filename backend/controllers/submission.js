import express from 'express';
import { callChat, extractResponse } from '../services/ollamaService.js'
import { testSwitch } from '../utils/userTest.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const userAnswer = req.body;
    console.log('Received input:', userAnswer);
    let testId = 0;
    let correctness = 0; //0 means wrong, 1 means correct

    const ans = await callChat(userAnswer.input);
    console.log("ans: " + ans);
    const extracted = extractResponse(ans);
    console.log("extracted: " + extracted);
    testId = parseInt(userAnswer.userSelection);
    console.log("testID: ", testId);

    const testResult = await testSwitch(testId, extracted);
    console.log("testResult: ", testResult);

    //updates correctness of the question to 1 if correct and 0 if wrong.
    if(testResult.includes("passed")) {
      correctness = 1;
    } else {
      correctness = 0;
    }

    //console.log(correctness);
  
    //error with frontend msg display 
    res.json({code: extracted, test: testResult, points: correctness});
  });

  export { router as userAnswer };