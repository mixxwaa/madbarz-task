import React from 'react';
import styled from 'styled-components';

const TimePublished = styled.h1`
  font-size: 12px;
  font-weight: normal;
  color: #747474;
  padding-top: 18px;
  padding-right: 15px;
  @media (max-width: 220px) {
    display: none;
  }
`;

function Time() {
  return (
    <div>
      <TimePublished>Just now</TimePublished>
    </div>
  );
}

export default Time;
