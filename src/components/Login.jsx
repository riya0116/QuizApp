function Login({
  email,
  password,
  setEmail,
  setPassword,
  loginUser,
  handleBack,
}) {
  return (
    <div className="container">

      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={loginUser}>
        Login
      </button>

      <button onClick={handleBack}>
        ← Back
      </button>

    </div>
  );
}

export default Login;