import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "./../helpers/axiosWithAuth";

// username: Lambda School,  password: i<3Lambd4

const Login = () => {
  //2. Add whatever state nessiary for form functioning.
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make a post request to retrieve a token from the api
    axios
      .post("http://localhost:5000/api/login", formValue)
      .then((res) => {
        // when you have handled the token, navigate to the BubblePage route

        //5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        history.push("/bubbles");
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  };
  return (
    <>
      <h1>
        Welcome to the Bubble App!
        {/* <p>Build a login page here</p> */}
        {/* 1. Build a form containing a username and password field. */}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={formValue.username}
            onChange={handleChange}
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={formValue.password}
            onChange={handleChange}
          />
        </div>
        <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
