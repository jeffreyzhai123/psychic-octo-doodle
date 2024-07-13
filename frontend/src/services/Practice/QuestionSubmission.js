
// This file contains the function that sends the user's input to the backend for evaluation and returns the result of the evaluation.
export async function submitQuestion(input, questionNumber, setResult, setInput) {
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