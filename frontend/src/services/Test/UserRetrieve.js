
export async function fetchUser(user_id, setUserExistence) {
    try {
      const response = await fetch(`http://localhost:3080/results/${user_id}`); // Adjust port if necessary
      if (response.ok) {
        await response.json();
        setUserExistence(true);
      } else {
        throw new Error('Failed to fetch userid');
      }

    } catch (error) {
      setUserExistence(false);
    }
  };