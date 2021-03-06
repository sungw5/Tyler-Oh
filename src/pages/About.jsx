import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
import Image from 'react-bootstrap/Image';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div id="about">
      <Fade cascade="true">
        <div className="about">
          <Fade duration="2000">
            <h1 className="about-heading pt-3 text-center font-details pb-3">
              <small className="about-small">import</small>{' '}
              <strong>Passion</strong>{' '}
              <small className="about-small">from</small>{' '}
              <strong>"Tyler.js"</strong>
            </h1>
          </Fade>
          <Fade duration="3000">
            <Container>
              <Row className="pt-3 pb-5 align-items-center">
                <Col xs={12} md={6}>
                  <Row className="justify-content-center mb-2 mr-2 ">
                    <Image
                      className="profile justify-content-end"
                      alt="profile"
                      src="https://github.com/sungw5/imgs/blob/main/IMG_4901%202.jpg?raw=true"
                      thumbnail
                      fluid
                    />
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <Row className="align-items-start p-2 my-details rounded">
                    Hi there! My name is <strong>&nbsp;Sung Woo Oh</strong>
                    <br />
                    I'm a computer science / mathematics student from
                    <br />
                    the Pennsylvania State University graduating in Spring 2021.
                    <br />
                    <br />
                    I love discovering new technologies, solving problems, and
                    analyzing other people's strengths. I have strong debugging
                    skills and I believe this comes from my patient personality.
                    <br />
                    My goal is to become a developer who creates a meaningful
                    impact and gives motivations to hundreds of people.
                    <br />
                    I'm currently taking AI and Machine Learning courses and
                    studying back-end technologies as my side-projects.
                    <br />
                    <br />
                    Besides programming, I'm interested in:
                    <br />
                    Drawing / Graphic Design / Tennis / Building Custom
                    Keyboards.
                    <br />
                    You can check out my works below :)
                    <br />
                    <br />
                    <br /> <br />
                    <Col className="d-flex justify-content-center flex-wrap">
                      <div>
                        <a href="#contact">
                          <FontAwesomeIcon
                            icon={faAddressCard}
                            size="3x"
                            color="black"
                            opacity="75%"
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="d-flex justify-content-center flex-wrap">
                      <div>
                        <a href="https://github.com/sungw5">
                          <FontAwesomeIcon
                            icon={faGithub}
                            size="3x"
                            color="black"
                            opacity="75%"
                          />
                        </a>
                      </div>
                    </Col>
                    <Col className="d-flex justify-content-center flex-wrap">
                      <div>
                        <a href="https://www.instagram.com/sunwu_o5/">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            size="3x"
                            color="black"
                            opacity="75%"
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default About;
