import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import circle from '../../../../assets/images/circle_01.svg';

function Feature(props) {
  const Container = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row${props.reverse && '-reverse'};
    & .img-outer-container {
      display: flex;
      align-items: center;
      width: 58%;
      & .img-inner-container {
        position: relative;
        & img.image {
          width: 100%;
          border-radius: 10px;
        }
        & img.circle {
          position: absolute;
          width: 8.33vw;
          top: -2.92vw;
          ${props.reverse ? 'left' : 'right'}: -3.33vw;
          z-index: -1;
        }
      }

    }
    & .info-container {
      display: flex;
      width: 42%;
      align-items: center;
      & .info {
        padding-${props.reverse ? 'right' : 'left'}: 6.66vw;
        text-align: ${props.reverse ? 'right' : 'left'};
        & i {
          font-size: 80px;
          color: rgba(2,191,59,0.8);
        }
        & h2 {
          margin-top: 20px;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          color: #373737;
          font-size: 30px;
        }
        & p {
          padding-bottom: 15px;
          color: #aaa;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          line-height: 30px;
          font-weight: 300;
        }
        & a {
          display: inline-block;
          padding: 15px 33px;
          border-radius: 10px;
          background-color: rgba(2,191,59,0.65);
          text-decoration: none;
          color: white;
        }
      }
    }
    @media (max-width: 840px) {
      & .img-outer-container {
        & .img-inner-container {
          & img.circle {
            display: none;
          }
        }
      }
      & .info-container {
        & .info {
          padding-${props.reverse ? 'right' : 'left'}: 5.1vw;
        }
      }
    }
    @media (max-width: 785px) {
      flex-direction: column-reverse;
      & .img-outer-container {
        padding: 0 2.6vw;
        box-sizing: border-box;
        width: 100%;
      }
      & .info-container {
        width: 100%;
        margin-bottom: 4vw;
        & .info {
          padding-left: 2.6vw;
          padding-right: 2.6vw;
          text-align: left;
        }
      }
    }
    @media (max-width: 685px) {
      & .info-container {
        margin-bottom: 4.5vw;
      }
    }
    @media (max-width: 485px) {
      & .info-container {
        margin-bottom: 5vw;
      }
    }
    @media (max-width: 350px) {
      & .info-container {
        margin-bottom: 20px;
      }
    }
  `;

  return (
    <Container>
      <div className="img-outer-container">
        <div className="img-inner-container">
          <img className="image" src={props.image} />
          <img className="circle" src={circle} />
        </div>
      </div>
      <div className="info-container">
        <div className="info">
          <i className={props.icon}></i>
          <h2>{props.title}</h2>
          <p>
            Nullam cursus lacinia erat. In ut quam vitae odio lacinia tincidunt. Etiam rhoncus. Sed augue ipsum, egestas nec, vestibulu
          </p>
          <Link to="#">
            Learn more
          </Link>
        </div>
      </div>

    </Container>
  );
}

Feature.defaultProps = {
  reverse: false,
};

Feature.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default Feature;
