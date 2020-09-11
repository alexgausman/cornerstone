import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  display: flex;
  margin: 20px 0;
  padding: 25px 30px;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 6px 50px 0 rgba(0, 0, 0, .08);
  transition: all 200ms ease;
  color: #373737;
  text-decoration: none;
  &:hover {
    box-shadow: 0 6px 50px 0 rgba(0, 0, 0, .12);
  }
  & h4 {
    margin: 10px 0;
    padding-right: 15px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.3px;
    text-align: left;
  }
  & .date {
    font-family: 'Roboto', sans-sans-serif;
    color: rgba(55,55,55,0.7);
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 0.3px;
    min-width: 90px;
    text-align: right;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

function EventBox(props) {
  return (
    <StyledLink to="#">
      <h4>{props.name}</h4>
      <div className="date">
        {props.date}
      </div>
    </StyledLink>
  );
}

EventBox.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
};

export default EventBox;
