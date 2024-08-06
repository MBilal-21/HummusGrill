import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../Assets/banner-1.jpg";
import banner2 from "../../Assets/banner-2.jpg";
import banner3 from "../../Assets/banner-3.jpg";
import banner4 from "../../Assets/banner-4.jpg";
import Divider from "../Divider";
const AboutUs = () => {
  return (
    <div className="about">
      <div className="container">
        
        <div className="row" style={{ alignItems: "center", paddingTop:"50px" }}>
          {/* <!-- Title Content Start --> */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12 commontop text-left">
            <h4>about our restaurant food &amp; drinkes</h4>
            <Divider/>

            <p className="des text-justify">
              Hummus Mediterranean Grill has been serving the Hagerstown
              community with the best Chicken/Lamb Shawarma's, Wraps and
              Desserts. At Hummus Grill, every dish is created using only the
              freshest and the finest ingredients. All of our Shawarma's and
              Wraps are topped with only the freshest toppings.
            </p>
            <p  className="text-justify">
             <em> Call Us Today!</em>
              <br />
              Find out why our customers rave about us. We have been a part of
              the Hagerstown community since 2018. We use only the best
              ingredients, it must be fresh in order to be used in our dishes.
            </p>
          </div>
          {/* <!-- Title Content End --> */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12 d-flex justify-content-center align-items-center">
            <Carousel data-bs-theme="dark" controls={false} indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100 homeImageSlides"
                  src={banner1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 homeImageSlides"
                  src={banner2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 homeImageSlides"
                  src={banner3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 homeImageSlides"
                  src={banner4}
                  alt="forth slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
