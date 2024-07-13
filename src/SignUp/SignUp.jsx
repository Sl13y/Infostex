import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phonenumber, setphonenumber] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const Next = () => {
    (Firstname &&
      Lastname &&
      Email &&
      Password &&
      Phonenumber &&
      ConfirmPassword) === ""
      ? alert("Enter a valid input")
      : alert("Good");
  };
  const Confirm = () => {
    ConfirmPassword === Password ? Next() : alert("The passwords do not match");

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setphonenumber("");
  };
  return (
    <>
      <div className="overall">
        <div className="next">
          <p className="sign">SIGN UP</p>

          <p className="rights"></p>
          <div id="icon1"></div>
        </div>
        <div id="second">
          <h3 className="info">Infostex Concepts</h3>
          <p className="right">Welcome, please login.</p>
          <form>
            <input
              type="text"
              placeholder="Firstname"
              value={Firstname}
              className="form2"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Lastname"
              id="form2"
              value={Lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              id="form2"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="Password"
              placeholder="Password"
              id="form2"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="Password"
              placeholder="Confirm Password"
              id="form2"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <input
              type="telephone"
              placeholder="Phone number"
              id="form2"
              value={Phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
            />
            <br />
          </form>
          <a href="#">
            <div id="icon2">
              <button
                type="button"
                value="Sign Up"
                id="form1"
                onClick={Confirm}
              >
                Sign Up
              </button>
              <br />
            </div>
          </a>
        </div>
        <a href="login" className="end">
          Back to login
        </a>
      </div>
    </>
  );
};
export default SignUp;
