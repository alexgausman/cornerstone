import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../../../common/Button';

import rainbow2400 from '../../../../assets/images/rainbow_2400.jpg';
import mailIcon from '../../../../assets/images/mail_icon.png';

const Section = styled.section`
  padding: 80px;
  background-image: url(${rainbow2400});
  background-position: 50% 50%;
  background-size: cover;
  & .container {
    display: inline-block;
    width: 440px;
    box-sizing: border-box;
    padding: 80px 0 70px;
    border-radius: 8px;
    background-color: rgba(255,255,255,0.9);
    box-shadow: 0 6px 50px 0 rgba(0, 0, 0, .1);
    text-align: center;
    & img.mail-icon {
      width: 75px;
      opacity: 0.9;
    }
    & h2 {
      font-family: Robot, sans-serif;
      font-weight: 300;
      font-size: 30px;
      margin-top: 38px;
      margin-bottom: 45px;
      opacity: 0.9;
    }
    & .inputs {
      margin-bottom: 65px;
      padding: 0 90px;
      & input {
        display: block;
        width: 100%;
        line-height: 1.42857143;
        color: #333333;
        vertical-align: middle;
        background: none;
        border: 1px solid #cccccc;
        outline: none;
        height: 60px;
        margin-top: 0px;
        margin-bottom: 20px;
        padding: 10px 0px;
        border-style: none none solid;
        border-bottom-width: 1px;
        border-bottom-color: rgba(0, 0, 0, .13);
        font-size: 15px;
        font-weight: 200;
        text-align: center;
        box-sizing: border-box;
      }
    }
  }
  @media (max-width: 620px) {
    padding: 13vw;
    & .container {
      width: 71vw;
      padding: 12.9vw 0 11.3vw;
      & .inputs {
        padding: 0 14vw;
      }
    }
  }
  @media (max-width: 520px) {
    & .container {
      & .inputs {
        padding: 0 12vw;
      }
    }
  }
  @media (max-width: 460px) {
    padding: 8vw;
    & .container {
      width: 84vw;
      & .inputs {
        padding: 0 14vw;
      }
    }
  }
  @media (max-width: 400px) {
    & .container {
      & .inputs {
        padding: 0 12vw;
      }
    }
  }
  @media (max-width: 360px) {
    padding: 6vw;
    & .container {
      width: 88vw;
    }
  }
`;

class Newsletter extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Section>
        <div className="container">
          <img src={mailIcon} className="mail-icon" />
          <h2>Email Updates</h2>
          <div className="inputs">
            <input
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
              value={this.state.name}
              onChange={this.onChange}
            />
            <input
              name="email"
              placeholder="Enter your email address"
              autoComplete="off"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <Button
            text="Subscribe now"
            bgColor="#70CE67"
            borderColor="#70CE67"
            textColor="white"
            bgColorHover="#5DC254"
            borderColorHover="#5DC254"
            textColorHover="white"
          />
        </div>
      </Section>
    );
  }
}

export default Newsletter;
