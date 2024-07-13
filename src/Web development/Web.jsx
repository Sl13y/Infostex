import React from "react";
import "./Web.css";
import frontend from "./HTML.jpg";
import backend from "./backend.jpg";
// import './get-google-fonts'
import { Slide } from "react-awesome-reveal";

const Web = () => {
  return (
    <>
      <Slide>
        <div className="row row4">
          <div className="col ">
            <img src={frontend} className="courses col4" />
          </div>

          <div className="col">
            <img src={backend} className="courses col4" />
          </div>
        </div>

        <div className="row row4">
          <div className="col">
            <a href="login">
              <p className="text-overlay3">FRONT-END WEB DEVELOPMENT</p>
            </a>
          </div>

          <div className="col">
            <a href="login">
              <p className="text-overlay3">BACK-END WEB DEVELOPMENT</p>
            </a>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Web;
