import React from 'react';
import styled from 'styled-components';

import Separator from '../../../common/Separator';
import EventBox from './EventBox';
import Button from '../../../common/Button';

const Section = styled.section`
  margin-top: 60px;
  padding: 90px 0;
  background-color: #fafafa;
  text-align: center;
  & h3 {
    font-family: Robot, sans-serif;
    font-weight: 300;
    color: #373737;
    font-size: 30px;
    margin-bottom: 15px;
  }
  & .events-container {
    display: inline-block;
    width: 66%;
    max-width: 645px;
    padding-bottom: 40px;
  }
  @media (max-width: 1050px) {
    & .events-container {
      width: 575px;
      max-width: none;
    }
  }
  @media (max-width: 685px) {
    & .events-container {
      width: calc(100vw - 80px);
    }
  }
  @media (max-width: 430px) {
    & .events-container {
      width: calc(100vw - 60px);
    }
  }
  @media (max-width: 380px) {
    & .events-container {
      width: calc(100vw - 40px);
    }
  }
`;

function UpcomingEvents(props) {
  return (
    <Section>
      <h3>Upcoming Events</h3>
      <div className="separator">
      <Separator />
      </div>
      <div className="events-container">
        <EventBox
          name="University Basketball"
          date="Feb 12, 2017"
        />
        <EventBox
          name="University Rugby"
          date="Feb 16, 2017"
        />
        <EventBox
          name="England Rugby National Survey League Cup Match"
          date="Feb 28, 2017"
        />
      </div>
      <Button
        text="View calendar"
        bgColor="#8038ff"
        borderColor="#8038ff"
        textColor="white"
        bgColorHover="#6935D7"
        borderColorHover="#6935D7"
        textColorHover="white"
      />
    </Section>
  );
}

export default UpcomingEvents;
