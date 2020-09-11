import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Sidebar(props) {
  const Wrapper = styled.div`
    display: ${props.visible ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    & nav {
      position: absolute;
      top: 0;
      right: 0;
      width: 300px;
      min-height: 100vh;
      padding: 50px 35px;
      box-sizing: border-box;
      overflow: scroll;
      background-color: white;
      z-index: 100;
      a {
        display: block;
        padding: 20px;
        font-size: 22px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        color: rgb(61,61,61);
        text-align: left;
        text-decoration: none;
        &:hover, &.active {
          color: rgb(255, 152, 56);
        }
        &.active {
          pointer-events: none;
        }
      }
    }
    & .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0,0,0,0.6);
    }
  `;
  const isHome = (props.match.path === "/");
  return (
    <Wrapper>
      <nav>
        <Link to="/" className={isHome ? 'active' : ''}>
          Home
        </Link>
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
      </nav>
      <div
        className="bg"
        onClick={props.hideSidebar}
      ></div>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  visible: PropTypes.bool.isRequired,
  hideSidebar: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
}

export default Sidebar;
