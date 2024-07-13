import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { submitQuestion } from '../../services/Practice/QuestionSubmission';

function SubmissionBar({setResult, questionNumber}) {
    const [input, setInput] = useState("");

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            submitQuestion(input, questionNumber, setResult, setInput);
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