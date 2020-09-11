import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  opacity: 0.8;
  text-align: center;
  text-shadow: 0 -1px 6px rgba(0, 0, 0, .75);
  & .value {
    margin-bottom: 5px;
    font-family: Montserrat, sans-serif;
    font-size: 32px;
    font-weight: 400;
    text-shadow: 0 -1px 6px rgba(0, 0, 0, .6);
  }
  & .desc {
    font-family: Roboto, sans-serif;
    font-size: 14px;  
  }
`;

function HeroStat(props) {
  return (
    <Wrapper>
      <div className="value">
        {props.value}
      </div>
      <div className="desc">
        {props.desc}
      </div>
    </Wrapper>
  );
}

HeroStat.propTypes = {
  value: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default HeroStat;
