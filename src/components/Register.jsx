function Register({
  name,
  setName,
  registerEmail,
  setRegisterEmail,
  registerPassword,
  setRegisterPassword,
  registerUser,
  handleBack,
}) {
  return (
    <div className="container">

      <h1>Register</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={registerPassword}
        onChange={(e) => setRegisterPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={registerUser}>
        Register
      </button>

      <button onClick={handleBack}>
        ← Back
      </button>

    </div>
  );
}

export default Register;