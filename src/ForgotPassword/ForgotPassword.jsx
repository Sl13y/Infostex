import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const Validate = () => {
    email === "" ? alert("Enter a valid email") : alert("Good");
  };
  return (
    <>
      <div className="overall">
        <div className="next">
          <p className="sign">Forgot Password</p>
          <p className="rights"></p>
          <div id="icon1"></div>
        </div>
        <div id="second">
          <h3 className="info">Infostex Concepts</h3>
          <p className="right">Input your email for verification</p>
          <form>
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="form2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {/* <input type='password' placeholder='Password' id='form2' value={password} onChange={(e)=>setpassword(e.target.value)}/><br/>
        <input type='checkbox' id='box' value={Remember} onChange={(e) => setRemember(e.target.value)}/><label> Remember me</label> */}
          </form>
          <a href="#">
            <div id="icon2">
              <button
                type="button"
                value="Verify Email"
                id="form1"
                onClick={Validate}
              >
                Verify Email
              </button>
              <br />
            </div>
          </a>
        </div>
        {/* <a href='signUp'> <p className='end'>Don't have an account? Sign Up.</p></a> */}
      </div>
    </>
  );
};
export default ForgotPassword;
