from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the dataset from the JSON file
sti_data = pd.read_json('csvjson.json')

@app.route('/data/year/<int:year>', methods=['GET'])
def get_data_by_year(year):
    """Endpoint to get data by specific year"""
    data_by_year = sti_data[sti_data['Fiscal Years (FY)*'] == year]
    return jsonify(data_by_year.to_dict(orient='records'))

@app.route('/data/all_years', methods=['GET'])
def get_all_data():
    """Endpoint to get data for all years"""
    grouped_data = sti_data.groupby('Fiscal Years (FY)*').apply(lambda x: x.to_dict(orient='records'))
    return jsonify(grouped_data.to_dict())

@app.route('/data/test_type/<string:test_type>', methods=['GET'])
def get_data_by_test_type(test_type):
    """Endpoint to get data by STI test type"""
    data_by_test_type = sti_data[sti_data['STI Test Type'].str.contains(test_type, case=False, na=False)]
    return jsonify(data_by_test_type.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
