import { useState, useEffect } from "react";
function Quiz({
  
    
    questions,
  currentQuestion,
  setCurrentQuestion,
  score,
  setScore,
  setPage,
   saveQuizHistory,
}) {
  const [timeLeft, setTimeLeft] = useState(900);
  const [selectedOption, setSelectedOption] = useState("");

  const question = questions[currentQuestion];
  const progress =
  ((currentQuestion + 1) / questions.length) * 100;
  const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;

  useEffect(() => {
    

  const timer = setInterval(() => {

    setTimeLeft((prevTime) => {

  if (prevTime > 0) {
    return prevTime - 1;
  }

  return 0;

});

  }, 1000);
  

  return () => clearInterval(timer);

}, []);

useEffect(() => {

  if (timeLeft === 0) {
    alert("Time's Up!");

    // Later we'll go to Result page
  }

}, [timeLeft]);

  function nextQuestion() {
    if (selectedOption === "") {
  alert("Please select an answer.");
  return;
}

  if (selectedOption === question.answer) {
    setScore((prevScore) => prevScore + 1);
  }

  setSelectedOption("");

  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
  } else {

  if (selectedOption === question.answer) {
    setScore((prevScore) => prevScore + 1);
  }

  saveQuizHistory();

  setPage("result");
}
}

  return (
    <div className="container">
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>

    <p>
      Question {currentQuestion + 1} of {questions.length}
    </p>

    <h2>
  ⏰ Time Left: {minutes}:
  {seconds < 10 ? "0" + seconds : seconds}
</h2>
      <h2>
        Question {currentQuestion + 1} of {questions.length}
      </h2>

      <h3>{question.question}</h3>

   {question.options.map((option, index) => (

  <button
    key={index}
    onClick={() => setSelectedOption(option)}
    
    className={
      selectedOption === option
        ? "selected option-btn"
        : "option-btn"
    }
  >
   
    {String.fromCharCode(65 + index)}. {option}
  </button>

))}

<button onClick={nextQuestion}>
      Next
    </button>



    </div>
  );
}

export default Quiz;