import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../../../common/Button';
import HeroStat from './HeroStat';

import landingImg from '../../../../assets/images/landing_01.jpg';

const Section = styled.section`
  display: flex;
  position: relative;
  min-height: 400px;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Hero = styled.div`
  & .heading {
    margin: 20px 20px 10px;
    font-family: Lato, sans-serif;
    font-size: 52px;
    font-weight: 300;
    text-align: center;
    text-shadow: 0 -1px 10px rgba(0, 0, 0, .6);
    & div {
      display: inline-block;
      &.cornerstone {
        padding: 0 8px;
      }
      & div {
        display: inline-block;
        padding: 0 8px;
      }
    }
  }
  & .stats {
    display: flex;
    max-width: 80%;
    margin-top: 20px;
    margin-right: 10%;
    margin-left: 10%;
    justify-content: space-around;
  }
  @media (max-width: 635px) {
    & .stats {
      display: none;
    }
  }
  @media (min-width: 385px) and (max-width: 475px) {
    & .heading {
      font-size: 10.5vw;
    }
  }
  @media (max-width: 384px) {
    & .heading {
      font-size: 15vw;
      & div div.school {
        display: none;
      }
    }
  }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  & div {
    position: absolute;
    width: 100%;
    height: 100%;
    &.gradient {
      z-index: 5;
      background-image: linear-gradient(90deg, rgba(11, 160, 47, .5), rgba(167, 56, 255, .18)), linear-gradient(90deg,rgba(0,0,0,.15),rgba(0,0,0,.25));
    }
    &.image {
      background-image: url(${landingImg});
      background-position: 50% 50%;
      background-size: cover;
    }
  }
`;

class Landing extends Component {
  render() {
    return (
      <Section>
        <Hero>
          <div className="heading">
            <div className="cornerstone">
              Cornerstone
            </div>
            <div>
              <div className="montessori">
                Montessori
              </div>
              <div className="school">
                School
              </div>
            </div>
          </div>
          <div className="stats">
            <HeroStat value="32" desc="Years operating" />
            <HeroStat value="142" desc="Students" />
            <HeroStat value="14" desc="Teachers" />
            <HeroStat value="350+" desc="Alumni" />
          </div>
        </Hero>
        <BackgroundWrapper>
          <div className="gradient"></div>
          <div className="image"></div>
        </BackgroundWrapper>
      </Section>
    );
  }
}

export default Landing;
