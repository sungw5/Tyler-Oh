import React from "react";
import "./MyCarousal.css";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/bg1jpg.jpg";

const MyCarousal = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="bg-img d-block w-100" src={Slide1} alt="slide1" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MyCarousal;
