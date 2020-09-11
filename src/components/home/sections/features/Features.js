import React from 'react';
import styled from 'styled-components';

import Feature from './Feature';

import academicsImg from '../../../../assets/images/stock_01.jpeg';
import philosophyImg from '../../../../assets/images/stock_02.jpg';

const Section = styled.section`
  padding: 0 30px;
  & .blank-space {
    height: 8vw;
    max-height: 100px;
  }
  @media (max-width: 785px) {
    & .blank-space {
      height: 30px;
    }
  }
  @media (max-width: 720px) {
    padding: 35px 30px 0;
  }
`;

function Features(props) {
  return (
    <Section>
      <Feature
        title="Academics"
        icon="fas fa-graduation-cap"
        image={academicsImg}
      />
      <div className="blank-space"></div>
      <Feature
        title="Philosophy"
        icon="fas fa-hands"
        image={philosophyImg}
        reverse={true}
      />
    </Section>
  );
}

export default Features;
