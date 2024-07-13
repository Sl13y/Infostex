import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css";
import image1 from "./R.jpeg";
import image2 from "./pexels-danny-meneses-340146-943096.jpg";
import image3 from "./pexels-goumbik-1420709.jpg";
import image4 from "./pexels-luis-gomes-166706-546819.jpg";
import image5 from "./pexels-pixabay-356056.jpg";
import image6 from "./pexels-pixabay-60504.jpg";
import image7 from "./pexels-tima-miroshnichenko-5380642.jpg";
import newPic from "./new.jpg";
import capacity from "./capacity.jpeg";
import { Bounce } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Alert } from "bootstrap";


const Home = () => {
  const Alert = () => {
    alert('Working')
  }
  return (
    <>
      <div
        className="carousel-container"
        data-bs-spy="scroll"
        data-bs-target="carousel-item"
      >
        <div
          id="carouselExampleFade"
          className="carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="3000" // Add this attribute for interval
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="Second slide" />
              <Fade>
                <div className="text-overlay">
                  Design and Develop:
                  <br /> Create Stunning Websites
                </div>
              </Fade>
            </div>
            <div className="carousel-item active">
              {" "}
              {/* Make the first item active */}
              <img src={image1} className="d-block w-100" alt="First slide" />
              <Fade>
                <div className="text-overlay">
                  Create and Inspire:
                  <br /> Become a Graphics Expert
                </div>
              </Fade>
            </div>
            <div className="carousel-item">
              <img src={image7} className="d-block w-100" alt="Third slide" />
              <div className="text-overlay">
                Protect the Digital World: <br />
                Become a Cyber Security Expert
              </div>
            </div>
            <div className="carousel-item">
              <img src={image4} className="d-block w-100" alt="Fourth slide" />
              <div className="text-overlay">Become a Tech Savvy</div>
            </div>
            <div className="carousel-item">
              <img src={image5} className="d-block w-100" alt="Fifth slide" />
              <div className="text-overlay">
                Plan and Execute:
                <br /> Develop a Project Management Mindset
              </div>
            </div>
            <div className="carousel-item">
              <img src={image6} className="d-block w-100" alt="Sixth slide" />
              <div className="text-overlay">
                Safe and Secure:
                <br /> Master the Art of Cyber Protection
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* <h1 className="hover" onScroll={Alert}>Hover over me</h1> */}
      <div className="row tech">
        <div className="col">
          <Bounce>
            <a href="#reach" className="text1">
              Become a Tech Professional
            </a>
          </Bounce>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div
            className="carousel-container"
            data-bs-spy="scroll"
            data-bs-target="carousel-item"
          >
            <div
              id="carouselExampleFade"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="7000" // Add this attribute for interval
            >
              <div className="carousel-inner">
                <div className="carousel-item carousel-item2">
                  Discover Your Path:
                  <br /> Career Guidance for a Brighter <br />
                  Future
                </div>

                <div className="carousel-item active carousel-item2">
                  {" "}
                  {/* Make the first item active */}
                  Unlock the Power of Data:
                  <br /> Business Intelligence for Informed Decisions
                </div>

                <div className="carousel-item carousel-item2">
                  Unlock Your Emotional Potential: <br />
                  Emotional Intelligence for Success.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <img src={newPic} className="svg" alt="Discover" />
        </div>
      </div>

      <div className="row cards">
        <div className=" col card1">
          <div className="card-body1">
          <AutoStoriesIcon className="iconhome" />
              <br />
            <a href="courses" className="card-lnk1">
           
              LEARNING
            </a>
          </div>
        </div>
        <div className=" col card2">
          <div className="card-body">
          <WorkspacePremiumIcon className="iconhome" />
              <br />
            <a href="#" className="card-lnk2">
             
              PROFESSIONAL
            </a>
          </div>
        </div>
        <div className=" col card3">
          <div className="card-body">
          <CurrencyExchangeIcon className="iconhome" />
              <br />
            <a href="#" className="card-lnk3">
             
              BUSINESS
            </a>
          </div>
        </div>
      </div>

      {/* <div className="row cards" >
        <div className=" col-lg-5 card box">
          
          <div className="card-body "><a href="courses" className="card-lnk">View our courses</a></div>
        </div>
        <div className=" col-lg-5 card">
          <div className="card-body "><a href="#" className="card-lnk" data-bs-toggle="tooltip" data-bs-placement="bottom"
              title="ENROLL TODAY!">Join us</a></div>
        </div> */}

      {/* <Footer className='foot'/> */}
      

    </>
  );
};

export default Home;
