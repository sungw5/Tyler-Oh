import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact">
        <h1 className="contact-heading pt-3 text-center font-details pb-3">
          Reach Out To Me!
        </h1>

        <Container>
          <Row className="contact-message pt-3 pb-5 align-items-center justify-content-center">
            Open for Opportunities: Yes
            <br />
            Let's get in touch, I prefer email :)
          </Row>

          <Row className="pt-3 pb-5 align-items-center justify-content-center">
            <Col xs={12} md={2}>
              <a href="https://github.com/sungw5/my-discord-clone">
                <AwesomeButton type="secondary">
                  <i class="email-icon fas fa-envelope"></i>&nbsp;&nbsp;Email
                </AwesomeButton>
              </a>
            </Col>

            <Col xs={12} md={2}>
              <a href="https://github.com/sungw5/my-discord-clone">
                <AwesomeButtonSocial type="github">GitHub</AwesomeButtonSocial>
              </a>
            </Col>

            <Col xs={12} md={2}>
              <a href="https://github.com/sungw5/my-discord-clone">
                <AwesomeButtonSocial type="instagram">
                  Instagram
                </AwesomeButtonSocial>
              </a>
            </Col>
            <Col xs={12} md={2}>
              <a href="https://github.com/sungw5/my-discord-clone">
                <AwesomeButtonSocial type="facebook">
                  Facebook
                </AwesomeButtonSocial>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;