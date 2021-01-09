import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "./Gallery.css";
import TitlebarBelowImageList from "./QuiltedImageList";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { Fade } from "react-awesome-reveal";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Gallery = () => {
  return (
    <div id="gallery">
      <div className="gallery">
        <Fade direction="down">
          <h1 className="gallery-heading pt-3 text-center font-details pb-3">
            Tyler's Art Gallery
          </h1>
        </Fade>

        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={12}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <AutoplaySlider
                  play={true}
                  cancelOnInteraction={false} // should stop playing on user interaction
                  interval={5000}
                  infinite
                  className="gallery-slide"
                  animation="cubeAnimation"
                >
                  <div data-src="https://github.com/sungw5/imgs/blob/main/Staring%20Cat%20-%20Drawing.jpg?raw=true" />
                  <div data-src="https://github.com/sungw5/imgs/blob/main/Bellwithcaption.jpg?raw=true" />
                  <div data-src="https://github.com/sungw5/imgs/blob/main/fourcatswithcaption.jpg?raw=true" />
                  <div data-src="https://github.com/sungw5/imgs/blob/main/twomeE.jpg?raw=true" />
                  <div data-src="https://github.com/sungw5/imgs/blob/main/colorviolins.jpg?raw=true" />
                  <div data-src="https://github.com/sungw5/imgs/blob/main/charcoalviolin.jpg?raw=true" />
                  <div data-src="https://github.com/sungw5/imgs/blob/main/chairdrawingpractice.jpg?raw=true" />
                </AutoplaySlider>
              </Row>
            </Col>
          </Row>

          <Row className="pt-3 pb-5 align-items-center justify-content-center">
            <TitlebarBelowImageList />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Gallery;
