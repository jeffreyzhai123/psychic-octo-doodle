import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navigatebar from '../components/Navbar';
import DropMenu from '../components/Practice/Dropdown';
import SelectCard from '../components/Practice/SelectCard';
import QuestionCard from '../components/Practice/QuestionCard';
import Form from 'react-bootstrap/Form';

//should add useEffect later on to deal with having to make api get calls to request data from backend

function Practice() {

  const [selectedQuestion, setSelectedQuestion] = useState(-1); // question string
  const [questions, setQuestions] = useState([]); // questions pulled from database
  const [result, setResult] = useState(""); // sets the result
  const navigate = useNavigate();

  const exitButton = () => {
      navigate("/")
  }

  // fetch function for questions (async)
  const fetchQuestions = async (difficulty) => {
      try {
        const response = await fetch(`http://localhost:3080/questions/${difficulty}`); // Adjust port if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        // raw query (with _id)
        const questionsQuery = await response.json();
        // data with only question field
        const questionsData = questionsQuery.map(item => item.question);
        // sets the questions useState
        setQuestions(questionsData);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
  };

  return (
      <div className='main-container'>
          <Navigatebar />

          <div className='difficulty-select'>
            <Button variant="success" onClick={() => {fetchQuestions("easy")}}>Easy</Button>{' '}
            <Button variant="warning" onClick={() => {fetchQuestions("medium")}}>Medium</Button>{' '}
            <Button variant="danger" onClick={() => {fetchQuestions("hard")}}>Hard</Button>{' '}
          </div>

          <div className='question-choice'>
            { questions?.length > 0
              ? (
                <DropMenu numQuestions={questions.length} callback={setSelectedQuestion}/>
              ) : (
                <SelectCard />
              )}
          </div>

          <div className='question-display'>
            { selectedQuestion > -1 && questions?.length > 0 &&
            <QuestionCard selectedQuestion={selectedQuestion} questions={questions}/> }
          </div>

          <div className='user-input'>
            { selectedQuestion > -1 }
          </div>
      </div>
  );
}

export default Practice;