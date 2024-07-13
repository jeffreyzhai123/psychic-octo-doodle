import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function SubmissionBar({setResult, questionNumber}) {
    const [input, setInput] = useState("");

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            try {
                const response = await fetch('http://localhost:3080/submission', {
                  method: 'POST', 
                  headers: {
                    'Content-Type': 'application/json', 
                  },
                  body: JSON.stringify({ input, questionNumber }), 
                });
        
                if (response.ok) {
                    const data = await response.json(); // Get the response text
                    setResult(data); //updates the state of the app component
                    setInput(''); //clearing input form after submission
                } else {
                    console.log("Error:", response.statusText);
                }
              } catch (error) {
                console.error('Error submitting data:', error);
            }
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <Form.Control type="text" placeholder="Your Answer" value={input} onKeyDown={handleKeyDown} onChange={handleChange} />
        </>
    );
}

export default SubmissionBar;