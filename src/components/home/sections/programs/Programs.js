import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import preschoolImg from '../../../../assets/images/preschool_btn.png';
import kindergartenImg from '../../../../assets/images/kindergarten_btn.png';
import primaryImg from '../../../../assets/images/primary_btn.png';
import intermediateImg from '../../../../assets/images/intermediate_btn.png';

const Section = styled.section`
  padding: 50px 90px 115px;
  background-color: #fafafa;
  & .container {
    & .text {
      text-align: center;
      & h3 {
        font-family: Robot, sans-serif;
        font-weight: 300;
        color: #373737;
        font-size: 30px;
      }
      & span {
        font-family: Robot, sans-serif;
        font-weight: 300;
        color: rgba(61,61,61,0.6);
        font-size: 18px;
      }
    }
    & .buttons {
      display: flex;
      padding-top: 45px;
      max-width: 1080px;
      margin: 0 auto;
      justify-content: space-between;
      & .row {
        display: flex;
        width: 50%;
        justify-content: space-around;
        & a {
          position: relative;
          width: 175px;
          height: 175px;
          text-decoration: none;
          & img {
            width: 100%;
            height: 100%;
            margin-bottom: 20px;
            border-radius: 50%;
          }
          & .circle {
            position: absolute;
            left: 9%;
            top: 9%;
            width: 82%;
            height: 82%;
            box-sizing: border-box;
            border: 2px solid #fff;
            border-radius: 50%;
            transition: all 500ms cubic-bezier(.175, .885, .32, 1.275);
          }
          & .title {
            color: rgb(177, 177, 177);
            font-family: Roboto, sans-serif;
            font-size: 14px;
            font-weight: 300;
          }
          &:hover {
            & .circle {
              width: 105%;
              height: 105%;
              top: -2.5%;
              left: -2.5%;
              &.preschool {
                border-color: #f8c200;
              }
              &.kindergarten {
                border-color: #1bd443;
              }
              &.primary {
                border-color: #0191dc;
              }
              &.intermediate {
                border-color: #8120c5;
              }
            }
            & .title {
              color: black;
            }
          }
        }
      }
    }
  }
  @media (min-width: 851px) and (max-width: 1025px) {
    padding: 50px 8.7vw 115px;
    & .container {
      & .buttons {
        & .row {
          a {
            width: 17vw;
            height: 17vw;
          }
        }
      }
    }
  }
  @media (max-width: 850px) {
    padding: 50px 8.7vw 105px;
    & .container {
      & .buttons {
        flex-direction: column;
        align-items: center;
        & .row {
          width: 500px;
          &:first-child {
            margin-bottom: 70px;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    padding: 10vw 8.5vw 26vw;
    & .container {
      & .buttons {
        & .row {
          width: 85vw;
          justify-content: space-between;
          & a {
            width: 36.5vw;
            height: 36.5vw;
          }
        }
      }
    }
  }
  @media (max-width: 350px) {
    & .container {
      & .buttons {
        & .row {
          width: 82vw;
        }
      }
    }
  }
`;

class Programs extends Component {
  render() {
    return(
      <Section>
        <div className="container">
          <div className="text">
            <h3>Programs</h3>
            <span>for students between the ages of 5 and 12</span>
          </div>
          <div className="buttons">
            <div className="row">
              <Link to="#">
                <img src={preschoolImg} />
                <div className="circle preschool"></div>
                <span className="title">Preschool</span>
              </Link>
              <Link to="#">
                <img src={kindergartenImg} />
                <div className="circle kindergarten"></div>
                <span className="title">Kindergarten</span>
              </Link>
            </div>
            <div className="row">
              <Link to="#">
                <img src={primaryImg} />
                <div className="circle primary"></div>
                <span className="title">Primary</span>
              </Link>
              <Link to="#">
                <img src={intermediateImg} />
                <div className="circle intermediate"></div>
                <span className="title">Intermediate</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Programs;
