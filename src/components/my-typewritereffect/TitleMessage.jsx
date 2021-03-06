import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import './TitleMessage.css';
import { Fade } from 'react-awesome-reveal';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -255px;
  text-align: center;
  strong {
    font-size: 1.75em;
  }
  .titleMessage {
    background: #fff;
    padding: 2em;
    opacity: 100%;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }

  div {
    color: ${(props) => props.theme.textColor};

    font-weight: 100;
    letter-spacing: 6px;
    .main {
      font-size: 1em;
      font-weight: 350;
    }
    .sub {
      font-size: 28px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          <Fade duration="2000" delay="10">
            <small>Hello, I'm</small>
          </Fade>

          <span>
            <Fade duration="5000" delay="60">
              <strong>Tyler Oh</strong>
            </Fade>
          </span>
        </div>
        <Fade duration="4000" delay="90">
          <div className="sub">
            <Typewriter
              options={{
                strings: [
                  'Learner',
                  'Software Developer',
                  'Learner',
                  'Software Developer',
                  'Designer',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </Fade>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
