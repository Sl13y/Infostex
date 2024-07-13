import React from "react";
import project from "./project.jpeg";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  return (
    <>
      <Fade>
        <div className="row row4">
          <div className="col ">
            <img src={project} className="courses col4" />
          </div>

          <div className="col">
            {/* <img src={backend} className="courses col4"/> */}
          </div>
        </div>

        <div className="row row4">
          <div className="col">
            <a href="login">
              <p className="text-overlay3">PROJECT MANAGEMENT</p>
            </a>
          </div>

          <div className="col">
            {/* <a href="login"><p className="text-overlay3">BACK-END WEB DEVELOPMENT</p></a> */}
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Project;
