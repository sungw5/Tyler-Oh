import React from "react";
import "./Skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { faCuttlefish } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiGit,
  DiReact,
  DiBootstrap,
  DiLinux,
  DiMysql,
  DiPython,
  DiJava,
  DiPhotoshop,
  DiIonic,
} from "react-icons/di";

import { SiPhp } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { Fade, AttentionSeeker, Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills">
        <Container>
          <Fade duration="2000" direction="right">
            <Row className="skills-title-letter justify-content-center  ">
              SKILLS
            </Row>
          </Fade>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={7}>
              <Slide duration="2000">
                <Row className="row-lang align-items-start p-2 my-details rounded">
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiJsBadge
                        size="lg"
                        color="white"
                        opacity="75%"
                        animation="spin-hover"
                      />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiHtml5 size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiCss3 size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiJava size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <SiPhp size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiPython size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <FontAwesomeIcon
                        icon={faCuttlefish}
                        size="4x"
                        color="white"
                        opacity="75%"
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="row-frame align-items-start p-2 my-details rounded">
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiReact
                        size="lg"
                        color="white"
                        opacity="75%"
                        animation="spin-hover"
                      />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiMysql size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiIonic size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiBootstrap size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiLinux size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiGit size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <DiPhotoshop size="lg" color="white" opacity="75%" />
                    </div>
                  </Col>
                </Row>
              </Slide>
            </Col>

            <Col xs={12} md={5}>
              <Row className="skills-title justify-content-center mb-2 mr-2 ">
                <AttentionSeeker effect="jello" duration="2000">
                  <FaCode
                    size="5em"
                    color="white"
                    title="skills"
                    className="code-icon"
                  />
                </AttentionSeeker>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
