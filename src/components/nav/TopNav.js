import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../common/Button';

const Container = styled.header`
  position: absolute;
  top: 0;
  height: 90px;
  width: 100%;
  background-color: rgba(0,0,0,0.1);
  color: white;
  & .logo {
    position: absolute;
    margin-left: 50px;
    font-family: Montserrat, sans-serif;
    font-size: 22px;
    line-height: 90px;
    font-weight: 500;
    letter-spacing: -0.7px;
    pointer-events: none;
    & .icon {
      display: none;
      font-size: 30px;
    }
  }
  & .links {
    margin: 0 200px;
    & a {
      display: inline-block;
      margin-right: 1.5%;
      margin-left: 1.5%;
      padding 0 20px;
      opacity: 0.7;
      color: white;
      font-family: Roboto, sans-serif;
      font-weight: 500;
      font-size: 15px;
      line-height: 90px;
      letter-spacing: 0.5px;
      text-transform: none;
      text-decoration: none;
      transition: opacity 200ms ease;
      &:hover {
        opacity: 1;
      }
    }
  }
  & .button-wrapper {
    display: flex;
    position: absolute;
    top: 0;
    right: 40px;
    height: 100%;
    align-items: center;
  }
  & .menu-button-wrapper {
    display: none;
    position: absolute;
    top: 0;
    right: 40px;
    height: 100%;
    align-items: center;
    & i {
      cursor: pointer;
      font-size: 24px;
    }
  }
  @media (max-width: 890px) {
    & .links {
      display: none;
    }
    & .button-wrapper {
      display: none;
    }
    & .menu-button-wrapper {
      display: flex;
    }
  }
  @media (max-width: 550px) {
    & .logo {
      & .text {
        display: none;
      }
      & .icon {
        display: inline-block;
      }
    }
  }
`;

class TopNav extends Component {
  render() {
    return (
      <Container>
        <div className="logo">
          <div className="text">
            Cornerstone
          </div>
          <div className="icon">
            <i className="fas fa-apple-alt"></i>
          </div>
        </div>
        <div className="links">
          <Link to="#">
            Programs
          </Link>
          <Link to="#">
            Calendar
          </Link>
          <Link to="#">
            Faculty
          </Link>
          <Link to="#">
            Contact
          </Link>
        </div>
        <div className="button-wrapper">
          <Button
            text="Apply today"
            bgColor="rgba(0,0,0,0)"
            borderColor="rgba(255,255,255,0.57)"
            textColor="white"
            bgColorHover="white"
            borderColorHover="white"
            textColorHover="#8038ff"
            fontSize="14px"
          />
        </div>
        <div
          className="menu-button-wrapper"
          onClick={this.props.showSidebar}
        >
          <i className="fas fa-bars"></i>
        </div>
      </Container>
    );
  }
}

TopNav.propTypes = {
  showSidebar: PropTypes.func.isRequired,
};

export default TopNav;
