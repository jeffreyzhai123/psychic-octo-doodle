import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Navigatebar from '../components/Navbar';
import NoQuestionsCard from '../components/Test/NotAvaliable';
import QuestionCard from '../components/QuestionCard';
import SubmissionBar from '../components/Test/SubmissionBar';
import ResultAlert from '../components/ResultAlert';
import { fetchUser } from '../services/Test/UserRetrieve';
import { fetchQuestions } from '../services/QuestionsRetrieve';
import { useUser } from '@clerk/clerk-react'
import { createResult, updateResult } from '../services/Test/TestSubmission';

function Test() {
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [results, setResults] = useState([]);
  const [difficultySelected, setDifficulty] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userExistence, setUserExistence] = useState(false);
  const { user }  = useUser();
  const user_id = user.id;

  const addResult = (newResult) => {
    setResults(prevResults => [...prevResults, newResult]);
  };

  useEffect(() => {
    fetchUser(user_id, setUserExistence);

    if (questions?.length > 0 && currentQuestionNum >= questions.length && !userExistence) {
      createResult(results, user_id);
    } else if (questions?.length > 0 && currentQuestionNum >= questions.length && userExistence) {
      updateResult(results, user_id);
    }
  }, [user_id, userExistence, questions, currentQuestionNum, results]);

  return (
    <div className='main-container'>
        <Navigatebar />

            {/* Difficulty selection */}       
            { !difficultySelected && 
                <div className='difficulty-select'>
                    <Button variant="success" onClick={() => {
                      fetchQuestions("easy", setQuestions);
                      setDifficulty(true);
                    }}>Easy</Button>{' '}
                    <Button variant="warning" onClick={() => {
                      fetchQuestions("medium", setQuestions);
                      setDifficulty(true);
                    }}>Medium</Button>{' '}
                    <Button variant="danger" onClick={() => {
                      fetchQuestions("hard", setQuestions);
                      setDifficulty(true);
                    }}>Hard</Button>{' '}
                </div>
            }

            {/* Question display */}
            <div className='question-display'>
                {difficultySelected && currentQuestionNum < questions?.length && (
                    questions?.length > 0 ?
                    <QuestionCard selectedQuestion={currentQuestionNum} questions={questions}/> 
                    :
                    <NoQuestionsCard />
                )}  
            </div>

            {/* Submission bar */}
          <div className='user-input'>
            { questions?.length > 0 && currentQuestionNum < questions?.length &&
            <SubmissionBar setResult={addResult} questionNumber={currentQuestionNum} setQuestionNumber={setCurrentQuestionNum}/> 
            }
          </div>

          {/* Result display */}
          <div className='result-display'>
            { questions?.length > 0 && currentQuestionNum >= questions?.length && 
                results.map((result, index) => (
                  <ResultAlert key={index} result={result} />
                ))
            }
          </div>

      </div>
  );
}

export default Test;