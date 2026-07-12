function Home({ onLogin, onRegister }) {
  return (
    <div>

      <h1>Welcome to Quiz Master</h1>

      <p>Test your knowledge and improve your skills.</p>

      <div className="buttons">
        <button onClick={onLogin}>
          Login
        </button>

        <button onClick={onRegister}>
          Register
        </button>
      </div>

    </div>
  );
}

export default Home;