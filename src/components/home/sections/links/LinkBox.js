import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function LinkBox(props) {
  const Box = styled.div`
    position: relative;
    min-height: 400px;
    background-image: url(${props.img});
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 8px;
    overflow: hidden;
    transition: all 200ms ease;
    &:hover {
      box-shadow: 0 10px 45px 0 rgba(0, 0, 0, .2);
    }
    & .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      &.flat {
        // background-color: rgba(0, 0, 0, .3);
      }
      &.gradient {
        // background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), transparent);
        background-image: linear-gradient(120deg,rgba(11,160,47,.5),rgba(167,56,255,.18)),linear-gradient(90deg,rgba(0,0,0,.06),rgba(0,0,0,.12));
      }
    }
    & .text-box {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      color: white;
      text-shadow: 0 -1px 10px rgba(0,0,0,.6);
      & .title {
        margin-bottom: 10px;
        font-size: 34px;
      }
      & .type {
        font-size: 15px;
        color: rgba(255, 255, 255, 0.74);
        font-weight: 400;
        letter-spacing: -0.25px;
      }
    }
    @media (max-width: 910px) {
      & .text-box {
        & .title {
          font-size: 3.7vw;
        }
      }
    }
    @media (max-width: 860px) {
      min-height: 42.3vw;
    }
    @media (max-width: 675px) {
      & .text-box {
        & .title {
          font-size: 34px;
        }
      }
    }
    @media (max-width: 500px) {
      & .text-box {
        & .title {
          font-size: 6.75vw;
        }
      }
    }
  `;

  return (
    <a href={props.link}>
      <Box>
        <div className="overlay flat"></div>
        <div className="overlay gradient"></div>
        <div className="text-box">
          <div className="title">{props.title}</div>
          <div className="type">{props.type}</div>
        </div>
      </Box>
    </a>
  );
}

LinkBox.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default LinkBox;
