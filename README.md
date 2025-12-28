# 🏏 MERN IPL Predictor

![GitHub repo size](https://img.shields.io/github/repo-size/aryan-chaudhary23/MERN_IPL_Predictor?color=orange&style=for-the-badge)
![GitHub languages](https://img.shields.io/github/languages/top/aryan-chaudhary23/MERN_IPL_Predictor?color=blue&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/aryan-chaudhary23/MERN_IPL_Predictor?color=green&style=for-the-badge)

> A powerful hybrid application that combines the MERN stack with a Python Flask Machine Learning service to predict the outcome of IPL matches with high accuracy.

---

## 🔗 Live Demo

| Application | URL |
| :--- | :--- |
| **IPL Predictor App** | [Launch App 🚀](https://mern-ipl-predictor-frontend.onrender.com) |

---

## 🏗️ Architecture

This project uses a microservices-like architecture where the **Node.js** backend handles user data and application logic, while a dedicated **Flask** service runs the Machine Learning model for predictions.

```mermaid
graph LR
    A[React Frontend] -- User Input --> B[Node/Express Server]
    B -- Request Prediction --> C[Flask ML Engine]
    C -- Probability Score --> B
    B -- JSON Response --> A
```

---

## 🚀 Key Features

- **Match Prediction**: Predict the win probability of a chasing team based on current match stats.
- **Hybrid Backend**: Seamless integration between Node.js (Application logic) and Python (Data Science).
- **Real-time Stats**: Input runs, wickets, and overs to get dynamic winning chances.
- **Team & Venue Analysis**: Support for all major IPL teams and stadiums.
- **Interactive UI**: Clean, responsive React interface for easy interaction.

---

## 🛠️ Tech Stack

**Frontend:**
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) **React.js**
- ![Tailwind](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS**

**Backend (App Logic):**
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white) **Node.js**
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB) **Express.js**
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white) **MongoDB**

**Machine Learning Engine:**
- ![Python](https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54) **Python**
- ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=flat&logo=flask&logoColor=white) **Flask**
- ![Scikit-Learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=flat&logo=scikit-learn&logoColor=white) **Scikit-Learn**

---

## 💻 Installation & Setup

Clone the repository:

```bash
git clone [https://github.com/aryan-chaudhary23/MERN_IPL_Predictor.git](https://github.com/aryan-chaudhary23/MERN_IPL_Predictor.git)
cd MERN_IPL_Predictor
```

### 1. Setup Client (Frontend)
```bash
cd client
npm install
npm start
# Runs on localhost:3000
```

### 2. Setup Server (Node Backend)
Open a new terminal:
```bash
cd server
npm install
node index.js
# Runs on localhost:5000 (approx)
```

### 3. Setup Flask (ML Engine)
Open a new terminal:
```bash
cd flask
pip install -r requirements.txt
python app.py
# Runs on localhost:5001 (approx)
```

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/NewAlgorithm`)
3. Commit your changes (`git commit -m 'Improved prediction accuracy'`)
4. Push to the branch (`git push origin feature/NewAlgorithm`)
5. Open a Pull Request

---

## 📬 Contact

Aryan Chaudhary - [GitHub Profile](https://github.com/aryan-chaudhary23)

Project Link: [https://github.com/aryan-chaudhary23/MERN_IPL_Predictor](https://github.com/aryan-chaudhary23/MERN_IPL_Predictor)
