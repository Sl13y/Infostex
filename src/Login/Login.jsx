import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  //   const navigate = useNavigate();
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       navigate('/login', { replace: true });
  //     }
  //   }, [isLoggedIn]);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [Remember, setRemember] = useState(false);

  const Validate = () => {
    (username && password) === ""
      ? alert("Enter a  valid input")
      : alert("Good");
  };
  return (
    <>
      <div className="overall">
        <div className="next">
          <p className="sign">SIGN IN</p>
          <p className="rights">
            <a href="forgot" className="">
              {" "}
              Forgot Password?{" "}
              <PersonAddAlt1Icon
                style={{ fontSize: "2rem" }}
                className="icon1"
              />
            </a>
          </p>
          <div id="icon1"></div>
        </div>
        <div id="second">
          <h3 className="info">Infostex Concepts</h3>
          <p className="right">Welcome, please login.</p>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              className="form2"
              onChange={(e) => setusername(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              id="form2"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <br />
            <input
              type="checkbox"
              id="box"
              value={Remember}
              onChange={(e) => setRemember(e.target.value)}
            />
            <label id="rem"> Remember me</label>
          </form>

          <a href="home">
            <div id="icon2">
              <button
                type="button"
                value="Sign In"
                id="form1"
                onClick={Validate}
              >
                <LoginIcon id="iconstyle" />
                <p id="sign"> Sign In</p>
              </button>
              <br />
            </div>
          </a>
        </div>{" "}
        <p className="end">
          Don't have an account?<a href="signUp"> Sign Up.</a>
        </p>
      </div>
    </>
  );
};
export default LoginPage;
