import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Separator(props) {
  const Container = styled.div`
    display: inline-block;
    margin-bottom: ${props.marginBottom};
    & .line {
      display: flex;
      position: relative;
      width: 195px;
      height: 1px;
      background-color: ${props.lineColor};
      justify-content: center;
      align-items: center;
      & .box {
        width: 40px;
        height: 4px;
        background-color: ${props.boxColor};
      }
    }

  `;

  return (
    <Container>
      <div className="line">
        <div className="box"></div>
      </div>
    </Container>
  );
}

Separator.defaultProps = {
  lineColor: '#CDCDCD',
  boxColor: '#666666',
  marginBottom: '20px',
};

Separator.propTypes = {
  lineColor: PropTypes.string,
  color: PropTypes.string,
  marginBottom: PropTypes.string,
};

export default Separator;
