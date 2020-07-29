import React from 'react';
import styled from 'styled-components';

const TimePublished = styled.h1`
  font-size: 12px;
  font-weight: normal;
  color: #747474;
  padding-top: 18px;
  padding-right: 15px;
`;

function Time() {
  return (
    <div>
      <TimePublished>Just now</TimePublished>
    </div>
  );
}

export default Time;
