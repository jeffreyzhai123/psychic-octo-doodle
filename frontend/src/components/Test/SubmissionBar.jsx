import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { submitQuestion } from '../../services/Test/QuestionSubmission';

function SubmissionBar({setResult, questionNumber, setQuestionNumber}) {
    const [input, setInput] = useState("");
    const [placeholder, setPlaceholder] = useState("Your Answer");
    const [isDisabled, setIsDisabled] = useState(false);

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            submitQuestion(input, questionNumber, setResult, setPlaceholder, setQuestionNumber, setIsDisabled);
            setInput("");
            setIsDisabled(true);
            setPlaceholder("waiting for next question...");
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <Form.Control type="text" placeholder={placeholder} value={input} onKeyDown={handleKeyDown} onChange={handleChange} disabled={isDisabled} />
        </>
    );
}

export default SubmissionBar;