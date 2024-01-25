import React, { useState, useEffect } from 'react';
import './YearSelector.css';

const YearSelector = ({ onYearChange }) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await fetch('http://localhost:5000/data/all_years');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setYears(Object.keys(data).sort());
      } catch (error) {
        console.error('Error fetching years:', error);
      }
    };

    fetchYears();
  }, []);

  return (
    <div className="year-selector-container">
        <select className="year-selector" onChange={e => onYearChange(e.target.value)} defaultValue="">
            <option value="" disabled>Select Year</option>
            {years.map(year => (
                <option key={year} value={year}>{year}</option>
            ))}
        </select>
    </div>
);
};

export default YearSelector;
