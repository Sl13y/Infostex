import React from "react";
import "./Data.css";
import data from "./data.jpg";
import business from "./business.jpeg";
import { Slide } from "react-awesome-reveal";

const Data = () => {
  return (
    <>
      <Slide>
        <div className="row row4">
          <div className="col ">
            <img src={data} className="courses col4" />
          </div>

          <div className="col">
            <img src={business} className="courses col4" />
          </div>
        </div>

        <div className="row row4">
          <div className="col">
            <a href="login">
              <p className="text-overlay3 text-overlay4">DATA SCIENCE</p>
            </a>
          </div>

          <div className="col">
            <a href="login">
              <p className="text-overlay4 text-overlay3 ">BUSINESS ANALYTICS</p>
            </a>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Data;
