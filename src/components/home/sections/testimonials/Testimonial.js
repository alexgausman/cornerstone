import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import abstractBoxes from '../../../../assets/images/abstract_boxes.png';

function Testimonial(props) {
  const Wrapper = styled.div`
    position: relative;
    margin-top: 55px;
    & .avatar {
      display: flex;
      position: absolute;
      height: 50px;
      width: 50px;
      left: 34px;
      top: -25px;
      background-image: linear-gradient(135deg, ${props.avatarColor1}, ${props.avatarColor2});
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      & i {
        color: white;
        opacity: 0.5;
        font-size: 22px;
      }
    }
    & .container {
      width: 100%;
      box-shadow: 0 8px 28px 0 rgba(46, 50, 60, 0.12);
      border-radius: 10px;
      overflow: hidden;
      font-family: 'Roboto', sans-sans-serif;
      font-size: 15px;
      font-weight: 300;
      text-align: left;
      & .top {
        padding: 48px 33px 17px;
        background-color: #f4f5f9;
        background-image: linear-gradient(180deg, #fff, transparent);
        box-sizing: border-box;
        border-bottom: 2px solid ${props.lineColor};
        & span {

        }
      }
      & .stars {
        text-align: center;
        margin-top: 14px;
        letter-spacing: 3px;
        opacity: 0.9;
        color: ${props.lineColor};
      }
      & .bottom-text {
        padding: 12px 32px 30px;
        color: #222;
        line-height: 1.7;
      }
      & img.abstract-boxes {
        // display: none;
        position: absolute;
        right: 12px;
        bottom: 12px;
        width: 40px;
        opacity: 0.05;
      }
      & i.fa-quote-right {
        display: none;
        position: absolute;
        right: 12px;
        bottom: 12px;
        font-size: 32px;
        opacity: 0.06;
      }
    }
    @media (max-width: 900px) and (min-width: 771px) {
      margin-top: 6.1vw;
      & .container {
        & .top {
          padding: 5.3vw 3.6vw 1.9vw;
        }
        & .bottom-text {
          padding: 1.3vw 3.5vw 3.3vw;
        }
      }
    }
    @media (max-width: 500px) {
      margin-top: 11vw;
      & .container {
        & .top {
          padding: 9.6vw 6.6vw 3.4vw;
        }
        & .bottom-text {
          padding: 2.4vw 6.4vw 6vw;
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div className="container">
        <div className="avatar">
          <i className="fas fa-quote-left"></i>
        </div>
        <div className="top">
          <span>{props.name}</span> — {props.category}
        </div>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="bottom-text">
          "{props.text}"
        </div>
        <img src={abstractBoxes} className="abstract-boxes" />
        <i className="fas fa-quote-right"></i>
      </div>

    </Wrapper>
  );
}

Testimonial.defaultProps = {
  name: 'First Lastname',
  category: 'Parent',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  avatarColor1: '#FFE10A',
  avatarColor2: '#EB8058',
  lineColor: '#FFB005',
};

Testimonial.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  text: PropTypes.string,
  avatarColor1: PropTypes.string,
  avatarColor2: PropTypes.string,
  lineColor: PropTypes.string,
};

export default Testimonial;
