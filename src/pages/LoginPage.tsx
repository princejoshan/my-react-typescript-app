import React, { useState,useEffect } from "react";
import "../styles/Login.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { processLoginRequest } from "../redux/login/actions";
import { LoginProps } from "../redux/login/types";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  loginState  = useSelector((state: AppState) => state.login);
  
  useEffect(() => {
    if (loginState.currentUser?.isLoggedin) {
      navigate("/homepage");
    }
  }, [loginState]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginCredentials: LoginProps = {
      username,
      password,
      
    };
    dispatch(processLoginRequest(loginCredentials));
    };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <Button text="Login" />
        {loginState.error && <p className="error-message">{loginState.error}</p>}

      </form>
    </div>
  );
};

export default Login;
