import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 90px;
  & .quote {
    margin-top: 0;
    margin-bottom: 13px;
    font-family: 'Karma', serif;
    font-size: 41px;
    font-weight: 300;
    line-height: 1.3;
    opacity: 0.75;
    & i {
      font-size: 18px;
      position: relative;
      opacity: 0.75;
      &:nth-of-type(1) {
        top: -20px;
        left: -5px;
      }
      &:nth-of-type(2) {
        top: -18px;
        left: 1px;
      }
    }
  }
  & .name {
    font-family: 'Maven Pro', sans-serif;
    font-size: 24px;
    letter-spacing: -0.8px;
    opacity: 0.5;
  }
  @media (max-width: 1000px) {
    padding: 9vw;
    & .quote {
      font-size: 4.1vw;
      & i {
        font-size: 1.8vw;
        &:nth-of-type(1) {
          top: -2vw;
          left: -0.5vw;
        }
        &:nth-of-type(2) {
          top: -1.8vw;
          left: 0.1vw;
        }
      }
    }
    & .name {
      font-size: 2.4vw;
    }
  }
  @media (max-width: 925px) {
    padding: 9vw 9vw 8vw;
    & .name {
      font-size: 2.55vw;
    }
  }
  @media (max-width: 850px) {
    padding: 8vw 8vw 6vw;
    & .quote {
      font-size: 4.2vw;
      & i {
        font-size: 1.9vw;
      }
    }
    & .name {
      font-size: 2.7vw;
    }

  }
  @media (max-width: 740px) {
    padding: 8vw 7vw 5vw;
    & .quote {
      font-size: 4.3vw;
      & i {
        font-size: 2vw;
      }
    }
    & .name {
      font-size: 2.85vw;
    }
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

function Quote(props) {
  return (
    <Section>

      <p className="quote">
        <i className="fas fa-quote-left"></i>
        Montessori is an education for independence,
        <br/>
        preparing not just for school, but for life.
        <i className="fas fa-quote-right"></i>
      </p>

      <span className="name">
        — Maria Montessori, 1870-1952
      </span>
    </Section>
  )
}

export default Quote;
