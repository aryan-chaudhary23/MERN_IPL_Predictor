from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
import pandas as pd
import pickle

app = Flask(
    __name__,
    static_folder="frontend/build",  # Serve React's static files
    template_folder="frontend/build"  # Serve React's index.html
)

model=pickle.load(open("IPLModel1.pkl",'rb'))

data=pd.read_csv("req_df_IPL1.csv")

@app.route("/api/get_teams_and_city", methods=["GET"])
def get_car_data():
    batting_team = sorted(data["batting_team"].unique())
    bowling_team = sorted(data["bowling_team"].unique())
    city = sorted(data["city"].unique())
    # Convert any numpy.int64 values to native Python int type
    useful_data = {
        "batting_team": batting_team,
        "bowling_team": bowling_team,
        "city": city
    }
    # Return all lists as JSON
    return jsonify(useful_data)

@app.route("/api/predict", methods=["POST"])
def predict():
    dataa = request.get_json()
    input_data = pd.DataFrame([{
        'batting_team': dataa['batting_team'],
        'bowling_team': dataa['bowling_team'],
        'city': dataa['city'],
        'runs_left': int(dataa['total_runs_x'])-int(dataa['score']),
        'balls_left': 120-int(dataa['overs'])*6,
        'wickets': 10-int(dataa['wickets']),
        'total_runs_x':int(dataa['total_runs_x']),
        'crr': int(dataa['total_runs_x'])/int(dataa['overs']),
        'rrr': (int(dataa['total_runs_x'])-int(dataa['score']))/(20-int(dataa['overs']))
    }])
    print(dataa)
    # Perform the prediction
    prediction = model.predict_proba(input_data)

    # Return the predicted value as a response
    print(prediction[0])
    return jsonify({
        'batting_team_probability': int(prediction[0][1]*100),
        'bowling_team_probability': int(prediction[0][0]*100)
    })

@app.route("/")
def serve_react():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/<path:path>")
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

CORS(app, supports_credentials=True, origins=["https://mern-ipl-predictor-frontend.onrender.com"])

if __name__ == "__main__":
    app.run(port=5000,debug=True)
