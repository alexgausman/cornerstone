import React from 'react';
import styled from 'styled-components';

import phoneEmoji from '../../../../assets/images/phone-emoji-2.png';
import waveEmoji from '../../../../assets/images/wave-emoji.png';

const Section = styled.section`
  display: flex;
  padding: 50px 90px 100px;
  flex-direction: column;
  align-items: center;
  & h3 {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    color: #373737;
    font-size: 30px;
  }
  & span {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    color: rgba(61,61,61,0.6);
    font-size: 18px;
  }
  & .container {
    display: flex;
    width: 800px;
    margin-top: 40px;
    border-radius: 8px;
    border: 1px solid rgba(61,61,61,0.4);
    overflow: hidden;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    & .box {
      box-sizing: border-box;
      display: flex;
      width: 50%;
      padding: 30px;
      flex-direction: row;
      align-items: center;
      &.left {
        border-right: 1px solid rgba(61,61,61,0.4);
      }
      & img {
        width: 45px;
      }
      & .text {
        padding-left: 20px;
        text-align: left;
        & p {
          margin: 12px;
          &.heading {
            font-size: 19px;
            font-weight: 300;
          }
          &.desc {
            color: rgba(61,61,61,0.8);
          }
          &.action {
            & span {
              font-size: 15px;
              font-weight: 400;
              color: black;
              opacity: 0.6;
            }
            & i {
              margin-left: 4px;
              font-size: 13px;
              color: #FCB224;
            }
          }
        }
      }
    }
  }
  @media (max-width: 860px) {
    & .container {
      width: 90vw;
      & .box {
        padding: 3.5vw;
      }
    }
  }
  @media (max-width: 660px) {
    & .container {
      width: 75vw;
      flex-direction: column;
      & .box {
        width: 100%;
        padding: 4vw;
        &.left {
          border-right: none;
          border-bottom: 1px solid rgba(61,61,61,0.4);
        }
        & .text {
          padding-left: 2vw;
        }
      }
    }
  }
  @media (max-width: 520px) {
    padding: 35px 35px 70px;
    & .container {
      width: 85vw;
    }
  }
  @media (max-width: 420px) {
    & .container {
      & .box {
        padding: 3.5vw;
        & .text {
          & p {
            margin: 10px;
            &.heading {
              font-size: 17px;
            }
            &.desc {
              font-size: 15px;
            }
            &.action {
              & span {
                font-size: 14px;
              }
              & i {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
`;

function LearnMore() {
  return (
    <Section>
      <h3>
        Want to get in touch?
      </h3>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse varius enim.
      </span>
      <div className="container">
        <div className="left box">
          <img src={phoneEmoji} />
          <div className="text">
            <p className="heading">
              Talk via phone
            </p>
            <p className="desc">
              Lorem ipsum dolor sit amet, conset adipiscing elit suspendisse enim.
            </p>
            <p className="action">
              <span>Learn more</span>
              <i className="fas fa-chevron-right"></i>
            </p>
          </div>
        </div>
        <div className="right box">
          <img src={waveEmoji} />
          <div className="text">
            <p className="heading">
              Visit in person
            </p>
            <p className="desc">
              Lorem ipsum dolor sit amet, apides consorm elit suspendisse varis.
            </p>
            <p className="action">
              <span>Learn more</span>
              <i className="fas fa-chevron-right"></i>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default LearnMore;
