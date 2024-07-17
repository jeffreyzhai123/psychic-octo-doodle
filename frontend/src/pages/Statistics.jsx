import React, { useState, useEffect } from 'react';
import Navigatebar from '../components/Navbar';
import { useUser } from '@clerk/clerk-react'
import { fetchResults } from '../services/Statistics/ResultsRetrieve';
import ResultAlert from '../components/ResultAlert';

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
            
        </div>

      </div>
  );
}

export default Test;