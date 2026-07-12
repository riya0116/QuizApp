function Rules({ category, startQuiz, handleBack }) {
  return (
    <div className="container">

      <h1>{category} Quiz Rules 📖</h1>

      <p>1. Total Questions: 10</p>

      <p>2. Time Limit: 15 Minutes</p>

      <p>3. Each Correct Answer: +1</p>

      <p>4. No Negative Marking</p>

      <p>5. Click Start Quiz when you're ready.</p>

      <br />

      <button onClick={startQuiz}>
        Start Quiz
      </button>

      <button onClick={handleBack}>
        ← Back
      </button>

    </div>
  );
}

export default Rules;