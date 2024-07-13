import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navigatebar from '../components/Navbar';
import DropMenu from '../components/Practice/DropMenu';
import SelectCard from '../components/Practice/SelectCard';
import QuestionCard from '../components/Practice/QuestionCard';
import SubmissionBar from '../components/Practice/SubmissionBar';
import ResultAlert from '../components/Practice/ResultAlert';
import { fetchQuestions } from '../services/Practice/QuestionsRetrieve';

//should add useEffect later on to deal with having to make api get calls to request data from backend

function Practice() {

  const [selectedQuestion, setSelectedQuestion] = useState(-1); // question string
  const [questions, setQuestions] = useState([]); // questions pulled from database
  const [result, setResult] = useState(""); // sets the result

  return (
      <div className='main-container'>
          <Navigatebar />

          <div className='difficulty-select'>
            <Button variant="success" onClick={() => {
              fetchQuestions("easy", setQuestions)
              setSelectedQuestion(-1)
              setResult("")
              }}>Easy</Button>{' '}
            <Button variant="warning" onClick={() => {
              fetchQuestions("medium", setQuestions)
              setSelectedQuestion(-1)
              setResult("")
              }}>Medium</Button>{' '}
            <Button variant="danger" onClick={() => {
              fetchQuestions("hard", setQuestions)
              setSelectedQuestion(-1)
              setResult("")
              }}>Hard</Button>{' '}
          </div>

          <div className='question-choice'>
            { questions?.length > 0
              ? (
                <DropMenu numQuestions={questions.length} callback={setSelectedQuestion} setResult={setResult}/>
              ) : (
                <SelectCard />
              ) }
          </div>

          <div className='question-display'>
            { selectedQuestion > -1 && questions?.length > 0 &&
            <QuestionCard selectedQuestion={selectedQuestion} questions={questions}/> }
          </div>

          <div className='user-input'>
            { selectedQuestion > -1 && questions?.length > 0 &&
            <SubmissionBar setResult={setResult} questionNumber={selectedQuestion} /> }
          </div>

          <div className='result-display'>
            { result && 
            <ResultAlert result={result} />}
          </div>
      </div>
  );
}

export default Practice;