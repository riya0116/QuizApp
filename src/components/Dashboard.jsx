function Dashboard({ user, logoutUser, startQuiz}) {
  return (
    <div className="container">

      <h1>Welcome, {user.name} 👋</h1>

      <p>You have successfully logged in.</p>

      <br />

      <button onClick={startQuiz}>
  Start Quiz
</button>

      <br />
      <br />

      <button>View Profile</button>

      <br />
      <br />

      <button onClick={logoutUser}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;