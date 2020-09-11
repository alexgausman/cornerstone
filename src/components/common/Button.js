import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button(props) {
  const Wrapper = styled.div`
    & a {
      display: inline-block;
      padding: 12px 30px;
      border: 1px solid ${props.borderColor};
      border-radius: 34px;
      font-family: Roboto, sans-serif;
      font-size: ${props.fontSize};
      font-weight: 300;
      text-decoration: none;
      color: ${props.textColor};
      line-height: 25px;
      transition: all 200ms ease;
      background-color: ${props.bgColor};
      &:hover {
        background-color: ${props.bgColorHover};
        color: ${props.textColorHover};
        border-color: ${props.borderColorHover}
      }
    }
  `;

  return (
    <Wrapper>
      <Link to={props.link}>
        {props.text}
      </Link>
    </Wrapper>
  );
}

Button.defaultProps = {
  text: "",
  link: "#",
  bgColor: "gray",
  textColor: "white",
  borderColor: "rgba(255,255,255,0.57)",
  bgColorHover: "white",
  textColorHover: "#8038ff",
  borderColorHover: "white",
  fontSize: "15px",
};

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  bgColorHover: PropTypes.string,
  textColorHover: PropTypes.string,
  borderColorHover: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Button;
