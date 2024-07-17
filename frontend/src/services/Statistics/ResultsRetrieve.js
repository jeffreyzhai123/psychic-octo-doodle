
export async function fetchResults(user_id, setResults) {
    try {
      const response = await fetch(`http://localhost:3080/results/${user_id}`); // Adjust port if necessary

      // Check if the response is ok
      if (response.ok) {
        const results = await response.json();
        // Set the results useState
        setResults(results.results);

      } else {
        throw new Error('Failed to fetch userid');
      }

    } catch (error) {
        console.error('Error submitting data:', error);
    }
  };