function Result({
  score,
  totalQuestions,
  restartQuiz,
  logoutUser,
}) {

  const wrongAnswers = totalQuestions - score;

  const percentage = (
    (score / totalQuestions) * 100
  ).toFixed(2);

  return (
    <div className="container">

      <h1>🎉 Quiz Completed</h1>

      <h2>Your Score: {score} / {totalQuestions}</h2>

      <h3>Correct Answers: {score}</h3>

      <h3>Wrong Answers: {wrongAnswers}</h3>

      <h3>Percentage: {percentage}%</h3>

      <br />

      <button onClick={restartQuiz}>
        Play Again
      </button>

      <button onClick={logoutUser}>
        Logout
      </button>

    </div>
  );
}

export default Result;