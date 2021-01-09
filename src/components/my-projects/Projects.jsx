import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Proiects.css";
import OutechImg from "../../assets/img/outech-example.jpg";
import FilesysImg from "../../assets/img/filesys-example.jpg";
import HomedecoImg from "../../assets/img/homedeco-example.jpg";
import paintingImg from "../../assets/img/painting-example.jpg";
import moviedbImg from "../../assets/img/moviedb-example.jpg";
import discordImg from "../../assets/img/discord-example.jpg";
import Image from "react-bootstrap/Image";
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const Projects = () => {
  return (
    <div id="project">
      <div className="projects">
        <h1 className="project-heading pt-3 text-center font-details pb-3">
          <Typewriter
            options={{
              strings: ["print(   Projects   )"],
              autoStart: true,
              pauseFor: 10000,
              loop: true,
              delay: 20,
            }}
          />
          {/* <small className="Projects-small">System.out.println(</small>{" "}
          <strong>"Projects"</strong> <small>)</small> */}
        </h1>
        <Container>
          <Fade duration="1200" delay="10">
            {/* OUTECH */}
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image
                    className="project-example justify-content-end"
                    alt="Outech"
                    src={OutechImg}
                    fluid
                  />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className="project-detail-1 align-items-start  p-2 rounded">
                  <strong className="example-title">outechkorea.com</strong>
                  <br />
                  Official website for OUTECH, CNC machine company in South
                  Korea
                </Row>

                <Row className="project-detail-2 pt-3 pb-5 align-items-center ">
                  <ul>
                    <li>HTML/CSS/Javascript</li>
                    <li>Self-made carousal/grid slide</li>
                    <li>No CSS framework</li>
                  </ul>
                </Row>

                <Row className="pt-3 pb-5 align-items-center justify-content-center">
                  <Col md={3}>
                    <a href="https://www.outechkorea.com/">
                      <AwesomeButton type="secondary">Demo</AwesomeButton>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://github.com/sungw5/outech">
                      <AwesomeButtonSocial type="github">
                        GitHub Repository
                      </AwesomeButtonSocial>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* HOMEDECO */}
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image
                    className="project-example justify-content-end"
                    alt="Outech"
                    src={HomedecoImg}
                    fluid
                  />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className="project-detail-1 align-items-start  p-2 rounded">
                  <strong className="example-title">
                    Homedeco Landing Page
                  </strong>
                  <br />A landing page website for any product
                </Row>

                <Row className="project-detail-2 pt-3 pb-5 align-items-center ">
                  <ul>
                    <li>HTML/CSS/Javascript</li>
                    <li>Self-made carousal/slide</li>
                    <li>Made to build up CSS skills</li>
                  </ul>
                </Row>

                <Row className="pt-3 pb-5 align-items-center justify-content-center">
                  <Col md={3}>
                    <a href="https://sungw5.github.io/HomeDeco/index.html">
                      <AwesomeButton type="secondary">Demo</AwesomeButton>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://github.com/sungw5/HomeDeco/blob/master/index.html">
                      <AwesomeButtonSocial type="github">
                        GitHub Repository
                      </AwesomeButtonSocial>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Filesys */}
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image
                    className="project-example justify-content-end"
                    alt="FilesysImg"
                    src={FilesysImg}
                    fluid
                  />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className="project-detail-1 align-items-start  p-2 rounded">
                  <strong className="example-title">
                    LionCloud Filesystem Driver
                  </strong>
                  <br />A user-space device driver for a remotely connected
                  cloud storage device built in systems programming course
                </Row>

                <Row className="project-detail-2 pt-3 pb-5 align-items-center ">
                  <ul>
                    <li>C language</li>
                    <li>Logic for a basic UNIX file interface</li>
                    <li>LRU Cache implementation</li>
                  </ul>
                </Row>

                <Row className="pt-3 pb-5 align-items-center justify-content-center">
                  <Col>
                    <a href="https://github.com/sungw5/Filesystem-v1.2/blob/master/lcloud_filesys.c">
                      <AwesomeButtonSocial type="github">
                        GitHub Repository
                      </AwesomeButtonSocial>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Moviedb */}
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image
                    className="project-example justify-content-end"
                    alt="moviedbImg"
                    src={moviedbImg}
                    fluid
                  />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className="project-detail-1 align-items-start  p-2 rounded">
                  <strong className="example-title">
                    Movie Database Management System
                  </strong>
                  <br />A HTTP&PHP interface with user account system that
                  provides movie information populated by open source data
                </Row>

                <Row className="project-detail-2 pt-3 pb-5 align-items-center ">
                  <ul>
                    <li>HTML/Bootstrap/PHP/MySQL</li>
                    <li>User/Admin login system</li>
                    <li>
                      Popular movie DB management with CRUD functionalities
                    </li>
                  </ul>
                </Row>

                <Row className="pt-3 pb-5 align-items-center justify-content-center">
                  <Col>
                    <a href="https://github.com/sungw5/Movie-recommendation-system">
                      <AwesomeButtonSocial type="github">
                        GitHub Repository
                      </AwesomeButtonSocial>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* PaintingAPP */}
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image
                    className="project-example justify-content-end"
                    alt="paintingImg"
                    src={paintingImg}
                    fluid
                  />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className="project-detail-1 align-items-start  p-2 rounded">
                  <strong className="example-title">LetsPaint</strong>
                  <br />
                  Pretty painting board with animations using Javascript
                </Row>

                <Row className="project-detail-2 pt-3 pb-5 align-items-center ">
                  <ul>
                    <li>Javascript/CSS</li>
                    <li>Made to build up Javascript skills</li>
                    <li>
                      Brush size control/undo/particle effect/able to download
                      work
                    </li>
                  </ul>
                </Row>

                <Row className="pt-3 pb-5 align-items-center justify-content-center">
                  <Col md={3}>
                    <a href="https://sungw5.github.io/Painting-app/">
                      <AwesomeButton type="secondary">Demo</AwesomeButton>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://github.com/sungw5/Painting-app">
                      <AwesomeButtonSocial type="github">
                        GitHub Repository
                      </AwesomeButtonSocial>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* discord */}
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image
                    className="project-example justify-content-end"
                    alt="paintingImg"
                    src={discordImg}
                    fluid
                  />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className="project-detail-1 align-items-start  p-2 rounded">
                  <strong className="example-title">Discord Clone</strong>
                  <br />A web chat application running on firebase made for
                  React practice
                </Row>

                <Row className="project-detail-2 pt-3 pb-5 align-items-center ">
                  <ul>
                    <li>React/Redux/CSS</li>
                    <li>Material UI</li>
                    <li>User Authentication with Google</li>
                  </ul>
                </Row>

                <Row className="pt-3 pb-5 align-items-center justify-content-center">
                  <Col md={3}>
                    <a href="https://my-discord-clone-cfe00.web.app/">
                      <AwesomeButton type="secondary">Demo</AwesomeButton>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://github.com/sungw5/my-discord-clone">
                      <AwesomeButtonSocial type="github">
                        GitHub Repository
                      </AwesomeButtonSocial>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="pt-3 pb-5 align-items-center justify-content-center">
              <AwesomeButton
                type="primary"
                href="https://github.com/sungw5"
                target="_blank"
              >
                See More Project
              </AwesomeButton>
            </Row>
          </Fade>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
