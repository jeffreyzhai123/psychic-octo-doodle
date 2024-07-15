import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navigatebar from '../components/Navbar';
import NoQuestionsCard from '../components/Test/NotAvaliable';
import QuestionCard from '../components/QuestionCard';
import { fetchQuestions } from '../services/QuestionsRetrieve';
import { useUser } from '@clerk/clerk-react'

function Test() {
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [results, setResult] = useState("");
  const [difficultySelected, setDifficulty] = useState(false);
  const [questions, setQuestions] = useState([]);
  const { user }  = useUser();
  const user_id = user.id;

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
                {difficultySelected && (
                    questions?.length > 0 ?
                    <QuestionCard selectedQuestion={currentQuestionNum} questions={questions}/> 
                    :
                    <NoQuestionsCard />
                )}  
            </div>


      </div>
  );
}

export default Test;