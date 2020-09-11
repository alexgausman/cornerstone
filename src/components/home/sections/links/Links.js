import React from 'react';
import styled from 'styled-components';

import Separator from '../../../common/Separator';
import LinkBox from './LinkBox';

import stockImg3 from '../../../../assets/images/stock_03.jpg';
import stockImg4 from '../../../../assets/images/stock_04.jpg';

const Section = styled.section`
  padding: 50px 10px 60px;
  text-align: center;
  background-color: #fafafa;
  & h2 {
    font-family: Robot, sans-serif;
    font-weight: 300;
    font-size: 30px;
    margin-bottom: 15px;
  }
  & .links {
    display: flex;
    max-width: 1150px;
    margin: 20px auto 0;
    & .link-container {
      width: 50%;
      padding: 15px 10px;
    }
  }
  @media (max-width: 675px) {
    & .links {
      flex-direction: column;
      margin: 20px 10px 0;
      & .link-container {
        width: auto;
      }
    }
  }
  @media (max-width: 430px) {
    & .links {
      & .link-container {
        padding: 10px 0;
      }
    }
  }
`;

function Links() {
  return (
    <Section>
      <h2>Links</h2>
      <Separator />
      <div className="links">
        <div className="link-container">
          <LinkBox
            title="Why Small Schools Work"
            type="Blog post"
            link="https://www.montessori.org/why-small-schools-work-good-things-come-in-small-packages/"
            img={stockImg3}
          />
        </div>
        <div className="link-container">
          <LinkBox
            title="A Montessori Morning"
            type="Video"
            link="https://youtu.be/09Y-huCMjIc"
            img={stockImg4}
          />
        </div>
      </div>
    </Section>
  );
}

export default Links;
