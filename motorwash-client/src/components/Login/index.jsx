import React, { useState } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginData;

  const handleChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = async evt => {
    evt.preventDefault();
    console.log(evt);
  };

  return (
    <form>
      <div className="email-wrap">
        <label>Email</label>
        <input type="email"
          placeholder="email"
          value={email} name="email"
          autoComplete="on"
          onChange={handleChange}
        />
      </div>
      <div className="password-wrap">
        <label>Password</label>
        <input type="password"
          placeholder="Password"
          value={password} name="password"
          onChange={handleChange} autoComplete="on"
        />
      </div>
      <div className="submitBtn-wrap">
        <button type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
