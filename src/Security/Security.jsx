import React from "react";
import security from "./security.jpeg";
import quality from "./quality.jpeg";
import "./Security.css";
import { Slide } from "react-awesome-reveal";

const Security = () => {
  return (
    <>
      <Slide>
        <div className="row row4">
          <div className="col ">
            <img src={security} className="courses col4" />
          </div>

          <div className="col">
            <img src={quality} className="courses col4" />
          </div>
        </div>

        <div className="row row4">
          <div className="col">
            <a href="login">
              <p className="text-overlay3">CYBER SECURITY</p>
            </a>
          </div>

          <div className="col">
            <a href="login">
              <p className="text-overlay3">QUALITY ASSURANCE</p>
            </a>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Security;
