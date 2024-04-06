// import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Food is our passion, our priority, and our pride!</p>
            </div>
            <p className="mid">
            We are all about bringing you the best taste and top-notch quality.
             Embark on a delicious journey with us and experience the real joy of
              gourmet living. Our amazing flavors will make your taste buds dance with delight,
               and with super quick delivery, your order will be at your doorstep in no time.
            </p>
           
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;