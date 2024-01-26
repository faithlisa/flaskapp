STI Trends and Analysis Dashboard

Overview
The STI Trends and Analysis Dashboard is an interactive web application designed to visualize trends and analytics in sexually transmitted infections (STIs) over different years. Utilizing a combination of Python and React, this dashboard offers a user-friendly interface to explore and understand STI data effectively.

Features
Dynamic Year Selection: Users can select different years to view STI data, enabling comparisons and trend analysis over time.
Interactive Data Visualization: The application includes a data visualization component that dynamically updates to reflect the selected year's data.
Error Handling: Robust error handling to manage issues during data fetching.

How It Works
Year Selection: The YearSelector component allows users to choose a year, triggering data fetching for that particular year.
Data Fetching: The application fetches data for the selected year using the fetchDataForYear function.
Data Visualization: Upon successful data retrieval, the DataVisualization component renders the data in an interactive graphical format.

Technical Stack
Frontend: React (JavaScript/JSX), enabling a responsive and interactive user experience.
Backend: Python, responsible for data processing and API handling.

Data Handling: State management in React to dynamically update the visualizations based on user input.

Setup and Installation
Prerequisites
Node.js and npm (for React frontend)
Python 3.x (for backend services)

Frontend Setup
Clone the repository to your local machine.
Navigate to the frontend directory.
Run npm install to install the required node modules.
Start the frontend server using npm start. The application should now be running on localhost:3000.

Backend Setup
Navigate to the backend directory.
Install Python dependencies using pip install -r requirements.txt.
Start the backend server. If using Flask, the command might be python app.py. Ensure the backend server is running on the designated port.

Environment Configuration
Configure any environment variables as required, such as API endpoints or database connections.

Running the Application
With both frontend and backend servers running, visit localhost:3000 in your browser to view the application.
