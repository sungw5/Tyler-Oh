import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import { AttentionSeeker } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact">
        <h1 className="contact-heading pt-3 text-center pb-3">
          Reach Out To Me!
        </h1>

        <Container>
          <Row className="contact-message pt-3 pb-5 align-items-center justify-content-center">
            Open for Opportunities: Yes
            <br />
            Let's get in touch, I prefer email :)
            <br />
            sungbr95@gmail.com
          </Row>

          <Row className="pt-3 pb-5 align-items-center justify-content-center">
            <Col xs={12} md={2}>
              <AttentionSeeker duration="2000" effect="rubberBand">
                <a href="mailto:sungbr95@gmail.com">
                  <AwesomeButton type="secondary">
                    <i class="email-icon fas fa-envelope"></i>&nbsp;&nbsp;Email
                  </AwesomeButton>
                </a>
              </AttentionSeeker>
            </Col>

            <Col xs={12} md={2}>
              <a href="https://github.com/sungw5/">
                <AwesomeButtonSocial type="github">GitHub</AwesomeButtonSocial>
              </a>
            </Col>

            <Col xs={12} md={2}>
              <a href="https://www.instagram.com/sunwu_o5/">
                <AwesomeButtonSocial type="instagram">
                  Instagram
                </AwesomeButtonSocial>
              </a>
            </Col>
            <Col xs={12} md={2}>
              <AwesomeButtonSocial type="facebook">
                Facebook
              </AwesomeButtonSocial>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
