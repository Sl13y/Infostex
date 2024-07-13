import React, { useEffect, useState } from "react";
import "./Courses.css";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import WebIcon from "@mui/icons-material/Web";
import DatasetLinkedSharpIcon from "@mui/icons-material/DatasetLinkedSharp";
import SecuritySharpIcon from "@mui/icons-material/SecuritySharp";
import CurrencyBitcoinSharpIcon from "@mui/icons-material/CurrencyBitcoinSharp";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const Courses = () => {
  return (
    <>
      <Fade>
        <h1 className="select">Select a Course</h1>
      </Fade>

      <div className="row">
        <div className="col-3">
          <a href="web">
            <Fade delay={1000}>
              <button type="button" className="button2">
                WEB DEVELOPMENT
                <br />
                <WebIcon />
              </button>
            </Fade>
          </a>
        </div>

        <div className="col-3">
          <a href="data">
            <Fade delay={2000}>
              <button type="button" className="button2">
                DATA AND ANALYTICS
                <br />
                <DatasetLinkedSharpIcon />
              </button>
            </Fade>
          </a>
        </div>

        <div className="col-3">
          <a href="security">
            <Fade delay={3000}>
              <button type="button" className="button2">
                {" "}
                SECURITY AND ASSURANCE
                <br />
                <SecuritySharpIcon />
              </button>
            </Fade>
          </a>
        </div>

        <div className="col-3">
          <a href="graphics">
            <Fade delay={4000}>
              <button type="button" className="button2">
                GRAPHICS
              </button>
            </Fade>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <a href="project">
            <Fade delay={5000}>
              <button type="button" className="button2">
                MANAGEMENT
              </button>
            </Fade>
          </a>
        </div>

        <div className="col-3">
          <a href="blockchain">
            <Fade delay={6000}>
              <button type="button" className="button2">
                EMERGING TECHNOLOGIES
                <br />
                <CurrencyBitcoinSharpIcon />
              </button>
            </Fade>
          </a>
        </div>

        <div className="col-3">
          <a href="cloud">
            <Fade delay={7000}>
              <button type="button" className="button2">
                CLOUD AND INFRASTRUCTURE
                <br />
                <CloudUploadOutlinedIcon />
              </button>
            </Fade>
          </a>
        </div>
      </div>
    </>
  );
};
export default Courses;
