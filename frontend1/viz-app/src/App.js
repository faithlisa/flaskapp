import React, { useState } from 'react';
import YearSelector from './components/YearSelector';
import DataVisualization from './components/DataVisualization';
import { fetchDataForYear } from './services/dataService';

function App() {
    const [chartData, setChartData] = useState(null);

    const handleYearChange = async (year) => {
        try {
            const data = await fetchDataForYear(year);
            setChartData({ [year]: data }); // Update the state with the data for the selected year
        } catch (error) {
            console.error('Error fetching data for year:', error);
        }
    };

return (
  <div className="App">
      <h1>STI Trends and Analysis Dashboard</h1>
      <YearSelector onYearChange={handleYearChange} />
      <div className="graph-container">
          {chartData && <DataVisualization data={chartData} />}
      </div>
  </div>
);

}

export default App;
