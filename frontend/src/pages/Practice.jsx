import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navigatebar from '../components/Navbar';
import DropMenu from '../components/Practice/DropMenu';
import SelectCard from '../components/Practice/SelectCard';
import QuestionCard from '../components/QuestionCard';
import SubmissionBar from '../components/Practice/SubmissionBar';
import ResultAlert from '../components/ResultAlert';
import { fetchQuestions } from '../services/QuestionsRetrieve';

//should add useEffect later on to deal with having to make api get calls to request data from backend

function Practice() {

  const [selectedQuestion, setSelectedQuestion] = useState(-1); // question string
  const [questions, setQuestions] = useState([]); // questions pulled from database
  const [result, setResult] = useState(""); // sets the result

  return (
      <div className='main-container'>
          <Navigatebar />

          {/* Difficulty selection */}
          <div className='flex items-center justify-center'>
            <Button className='mx-3' variant="success" onClick={() => {
              fetchQuestions("easy", setQuestions)
              setSelectedQuestion(-1)
              setResult("")
              }}>Easy</Button>{' '}
            <Button className='mx-3' variant="warning" onClick={() => {
              fetchQuestions("medium", setQuestions)
              setSelectedQuestion(-1)
              setResult("")
              }}>Medium</Button>{' '}
            <Button className='mx-3' variant="danger" onClick={() => {
              fetchQuestions("hard", setQuestions)
              setSelectedQuestion(-1)
              setResult("")
              }}>Hard</Button>{' '}
          </div>

          {/* Question selection */}
          <div className='flex items-center justify-center mt-2 mb-2'>
            { questions?.length > 0
              ? (
                <DropMenu numQuestions={questions.length} callback={setSelectedQuestion} setResult={setResult}/>
              ) : (
                <SelectCard />
              ) }
          </div>
          
          {/* Question display */}
          <div className='question-display'>
            { selectedQuestion > -1 && questions?.length > 0 &&
            <QuestionCard selectedQuestion={selectedQuestion} questions={questions}/> }
          </div>
          
          {/* Submission bar */}
          <div className='user-input'>
            { selectedQuestion > -1 && questions?.length > 0 &&
            <SubmissionBar setResult={setResult} questionNumber={selectedQuestion} /> }
          </div>

          {/* Result display */}
          <div className='result-display'>
            { result && 
            <ResultAlert result={result} />}
          </div>
      </div>
  );
}

export default Practice;