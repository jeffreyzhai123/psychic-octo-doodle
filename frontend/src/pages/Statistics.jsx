import React, { useState, useEffect } from 'react';
import Navigatebar from '../components/Navbar';
import { useUser } from '@clerk/clerk-react'
import { fetchResults } from '../services/Statistics/ResultsRetrieve';
import QuestionCard from '../components/Statistics/ResultCard';

function Test() {
  const [results, setResults] = useState([]);
  const { user }  = useUser();
  const user_id = user.id;

  useEffect(() => {
    fetchResults(user_id, setResults);
  }, [user_id, results]);

  return (
    <div className='main-container'>
        <Navigatebar />
        {/* Result display */}
        <div className='result-display'>
          { results?.length > 0 
            ? ( 
            <QuestionCard results={results}/>
            ) : (
            <h1>No results to display</h1>
            ) }
        </div>

      </div>
  );
}

export default Test;