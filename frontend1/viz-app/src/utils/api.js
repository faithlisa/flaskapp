export const fetchDataForYear = async (year) => {
    const response = await fetch(`http://localhost:5000/data/year/${year}`);
    return await response.json();
  };
  