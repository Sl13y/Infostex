import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Logo4.jpg";

import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Header.css";
import Footer from "../Footer/Footer";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="skillOver" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ backgroundColor: "yellow" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="home" id="navName">
                HOME
              </Nav.Link>
              <Nav.Link href="about" id="navName">
                ABOUT
              </Nav.Link>
              <Nav.Link href="#pricing" id="navName">
                GALLERY
              </Nav.Link>
              <Nav.Link href="courses" id="navName">
                COURSES
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                id="navName"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              ></Nav.Link>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {/* <Link to='postTraining'>
                            <MenuItem onClick={handleClose}>Post Training</MenuItem>
                        </Link>
                        <Link to='postCareer'>
                            <MenuItem onClick={handleClose}>Post Career News</MenuItem>
                        </Link>
                         */}
              </Menu>
            </Nav>

            <Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  {/* <a href="#">
                            <img src={https://i.imgur.com/s3noPaC.png} alt="" />
                            </a>
                            <a href="#">
                            <img src={https://i.imgur.com/rxgJBL4.png} alt="" />
                            </a>
                            <a href="#">
                            <img src={https://i.imgur.com/cE0RPru.png} alt="" />
                            </a> */}
                </div>

                <a href="login">
                  <button className="vvd">
                    <span>Sign In </span>
                  </button>
                </a>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
