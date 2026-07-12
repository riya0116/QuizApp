import API from "./api/userApi";
import Result from "./components/Result";
import questions from "./data/questions";

import Quiz from "./components/Quiz";
import Rules from "./components/Rules";
import Category from "./components/Category";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { useState,useEffect } from "react";
import "./App.css";
function App() {
 function beginQuiz() {
  const shuffledQuestions =
    [...questions[category]].sort(() => Math.random() - 0.5);

  setQuizQuestions(shuffledQuestions);

  setCurrentQuestion(0);
  setScore(0);

  setPage("quiz");
   
 
}
  function startQuiz() {
  setPage("category");
}
function restartQuiz() {
  setCurrentQuestion(0);
  setScore(0);
  setPage("category");
}
const [quizQuestions, setQuizQuestions] = useState([]);
const [history, setHistory] = useState([]);

const [score, setScore] = useState(0);
  const [category, setCategory] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  function selectCategory(selectedCategory) {
  setCategory(selectedCategory);
  setPage("rules");
}
  function logoutUser() {
  setPage("home");

  setEmail("");
  setPassword("");
}
  const [user, setUser] = useState(null);
  useEffect(() => {

  const savedUser = localStorage.getItem("user");

  if (savedUser) {
    setUser(JSON.parse(savedUser));
  }

}, []);
  const [name, setName] = useState("");
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");
const registerUser = async () => {
  if (
    name === "" ||
    registerEmail === "" ||
    registerPassword === ""
  ) {
    alert("Please fill all fields.");
    return;
  }

  try {
    const response = await API.post("/register", {
      name: name,
      email: registerEmail,
      password: registerPassword,
    });

    setUser(response.data);

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    alert("Registration Successful!");

    setPage("login"); // Go to login page
  } catch (error) {
    console.error(error);
    alert("Registration Failed!");
  }
};
  function loginUser() {

  if (!user) {
    alert("No user registered yet.");
    return;
  }

  if (
    email === user.email &&
    password === user.password
  ) {
    setPage("dashboard");
  } else {
    alert("Invalid Email or Password");
  }
}
   const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const [page, setPage] = useState("home");
  function handleLogin() {
    setPage("login");
  }
  function handleRegister() {
   setPage("register");
}
function handleBack() {
  setPage("home");
}
function saveQuizHistory() {

  const newResult = {
    category: category,
    score: score,
    total: questions[category].length,
    percentage: (
      (score / questions[category].length) * 100
    ).toFixed(2),
    date: new Date().toLocaleString(),
  };

  setHistory((prevHistory) => [
    ...prevHistory,
    newResult,
  ]);
}
 
  if (page === "login") {
  return (
    
  
    <Login
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      loginUser={loginUser}
      handleBack={handleBack}
    />
  );
}
if (page === "register") {
  return (
     <Register
      name={name}
      setName={setName}
      registerEmail={registerEmail}
      setRegisterEmail={setRegisterEmail}
      registerPassword={registerPassword}
      setRegisterPassword={setRegisterPassword}
      registerUser={registerUser}
      handleBack={handleBack}
    />
  );
}

if (page === "dashboard") {
  return (
    <Dashboard
      user={user}
      logoutUser={logoutUser}
       startQuiz={startQuiz}
    />
  );
}
if (page === "category") {
  return (
    <Category
      selectCategory={selectCategory}
      handleBack={handleBack}
    />
  );
}
if (page === "rules") {
  return (
    <Rules
      category={category}
      startQuiz={beginQuiz}
      handleBack={() => setPage("category")}
    />
  );
}
if (page === "quiz") {
  return (
    <Quiz
  questions={quizQuestions}
  currentQuestion={currentQuestion}
  setCurrentQuestion={setCurrentQuestion}
  score={score}
  setScore={setScore}
  setPage={setPage}
    saveQuizHistory={saveQuizHistory}
/>
  );
}
if (page === "result") {
  return (
    <Result
      score={score}
      totalQuestions={questions[category].length}
      restartQuiz={restartQuiz}
      logoutUser={logoutUser}
    />
  );
}
   return (
  <div className="container">
    <Home
      onLogin={handleLogin}
      onRegister={handleRegister}
    />
  </div>
); 
}

export default App;