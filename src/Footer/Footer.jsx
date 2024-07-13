import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactDOM from 'react-dom';
import "./Footer.css";
import Row from "../reportWebVitals";
import "@fontsource/open-sans";
// import './'

const Footer = () => {
  return (
    <footer id="foot">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>InfoSTEx </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="a">
                  Questions
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>PRODUCTS</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="a">
                  Teams
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Advertising
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Code Training
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Talent
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>COMPANY</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="a">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Work Here
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Cookie Settings
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>EXCHANGE NETWORK</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="a">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Culture & recreation
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Life & arts
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Science
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Professional
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Data
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="a">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
