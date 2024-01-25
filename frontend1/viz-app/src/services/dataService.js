// src/services/dataService.js

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

export const fetchDataForYear = async (year) => {
    try {
        const response = await fetch(`${BASE_URL}/data/year/${year}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchAllData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/data/all_years`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
