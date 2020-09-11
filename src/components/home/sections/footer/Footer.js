import React from 'react';
import styled from 'styled-components';

import map from '../../../../assets/images/map_large.png';

const Section = styled.section`
  padding: 70px 90px;
  background-color: #f5f5f5;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  & .outer-container {
    max-width: 1150px;
    margin-right: auto;
    margin-left: auto;
    & .container {
      display: flex;
      text-align: left;
      line-height: 25px;
      font-size: 14px;
      justify-content: space-between;
      & .info {
        display: flex;
        width: 30%;
        padding-right: 20px;
        flex-direction: column;
        justify-content: space-between;
        & div {
          margin: 0;
          &.heading {
            font-family: Montserrat, sans-serif;
            color: #8038ff;
            font-size: 22px;
            font-weight: 500;
            letter-spacing: -0.7px;
          }
          &.desc {
            margin 10px 0;
          }
          &.small {
            font-size: 12px;
            color: rgba(0,0,0,0.65);
            line-height: 1.6;
          }
        }
        & .heading {
          font-family: Montserrat, sans-serif;
          color: #8038ff;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.7px;
        }
      }
      & .map {
        width: 41.7%;
        border-radius: 10px;
        background-image: url(${map});
        background-position: 50% 50%;
        background-size: 632px 262px;
      }
      & .contact {
        width: 155px;
        max-width: 170px;
        padding-left: 20px;

        & div {
          &.heading {
            font-size: 20px;
          }
          &.info {
            width: 100%;
            margin: 11px 0 8px;
            margin-right: 0;
            padding-right: 0;
          }
        }
      }
    }
  }
  @media (max-width: 1100px) {
    & .outer-container {
      & .container {
        & .info {
          width: 400px;
        }
        & .map {
          display: none;
        }
      }
    }
  }
  @media (max-width: 980px) {
    padding: 70px calc((100vw - 800px)/2);
  }
  @media (max-width: 860px) {
    padding: 70px 5vw;
  }
  @media (max-width: 660px) {
    padding: 10vw 8vw;
    & .outer-container {
      & .container {
        & .info {
          width: 50%;
        }
      }
    }
  }
  @media (max-width: 580px) {
    & .outer-container {
      & .container {
        flex-direction: column;
        & .info {
          width: 100%;
        }
        & .contact {
          width: 100%;
          padding-left: 0;
          padding-top: 30px;
        }
      }
    }
  }
`;

function Footer(props) {
  return (
    <Section>
      <div className="outer-container">
        <div className="container">
          <div className="info">
            <div className="heading">
              Cornerstone
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
            </div>
            <div className="small">
              Copyright © Cornerstone Montessori Ltd.
            <br/>
              Website by Alex Gausman
            </div>
          </div>
          <div className="map">
          </div>
          <div className="contact">
            <div className="heading">
              Contact Us
            </div>
            <div className="info">
              604-599-9918
              <br/>
              info@cornerstone.school
              <br/>
              14724 84 Ave, Surrey
            </div>
            <a href="#">
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>

    </Section>
  );
}

export default Footer;
