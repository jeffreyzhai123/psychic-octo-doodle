// Purpose: Retrieve questions from the database based on the difficulty level.
export const fetchQuestions = async (difficulty, setQuestions) => {
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