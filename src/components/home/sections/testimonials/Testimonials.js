import React from 'react';
import styled from 'styled-components';

import Separator from '../../../common/Separator';
import Testimonial from './Testimonial';

const Section = styled.section`
  padding: 50px 10px 70px;
  text-align: center;
  & h2 {
    font-family: Robot, sans-serif;
    font-weight: 300;
    font-size: 30px;
    margin-bottom: 15px;
  }
  & .testimonials {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    & .column {
      display: inline-block;
      width: 33.33333333%;
      height: 100%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
  @media (max-width: 1100px) {
    & .testimonials {
      padding: 0 5vw;
      & .column {
        width: 50%;
        padding: 0 20px;
        &:nth-child(2) {
          display: none;
        }
      }
    }
  }
  @media (max-width: 1020px) {
    & .testimonials {
      padding: 0 4vw;
    }
  }
  @media (max-width: 960px) {
    & .testimonials {
      padding: 0 3vw;
    }
  }
  @media (max-width: 930px) {
    & .testimonials {
      padding: 0 20px;
    }
  }
  @media (max-width: 770px) {
    & .testimonials {
      padding: 0 15vw;
      & .column {
        width: 100%;
        &:nth-child(1) {
          display: none;
        }
      }
    }
  }
  @media (max-width: 680px) {
    & .testimonials {
      padding: 0 12vw;
    }
  }
  @media (max-width: 540px) {
    & .testimonials {
      padding: 0 10vw;
    }
  }
  @media (max-width: 480px) {
    & .testimonials {
      padding: 0 8vw;
    }
  }
  @media (max-width: 440px) {
    & .testimonials {
      padding: 0 5vw;
    }
  }
  @media (max-width: 400px) {
    & .testimonials {
      padding: 0 5vw;
    }
  }
  @media (max-width: 400px) {
    & .testimonials {
      padding: 0 0;
    }
  }
`;

function Testimonials(props) {
  return (
    <Section>
      <h2>Testimonials</h2>
      <Separator />
      <div className="testimonials">
        <div className="column">
          <Testimonial
            name="First Lastname"
            category="Parent"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
            avatarColor1="#FFE10A"
            avatarColor2="#EB8058"
            lineColor="#FFB005"
          />
          <Testimonial
            name="First Lastname"
            category="Student"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            avatarColor1="#F18AB9"
            avatarColor2="#9E4BDD"
            lineColor="#E864F3"
          />
        </div>
        <div className="column">
          <Testimonial
            name="First Lastname"
            category="Parent"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
            avatarColor1="#6AE8FF"
            avatarColor2="#5172FF"
            lineColor="#3688FF"
          />
          <Testimonial
            name="First Lastname"
            category="Parent"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
            avatarColor1="#68FFD4"
            avatarColor2="#36D1C3"
            lineColor="#16DBB8"
          />

        </div>
        <div className="column">
          <Testimonial
            name="First Lastname"
            category="Student"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            avatarColor1="#5BFC9C"
            avatarColor2="#49C03B"
            lineColor="#5FDB59"

          />
          <Testimonial
            name="First Lastname"
            category="Parent"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            avatarColor1="#FF9D5B"
            avatarColor2="#D13033"
            lineColor="#F85730"
          />
        </div>
      </div>
    </Section>
  );
}

export default Testimonials;
