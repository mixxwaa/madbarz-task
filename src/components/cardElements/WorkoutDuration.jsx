import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Clock } from '../../svg/clock-feed.svg';

const DurationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #000000;
  color: white;
  opacity: 0.7;
  height: 20px;
  border-radius: 5px;
  white-space: nowrap;
  margin-bottom: 5px;
`;
const Svg = styled(Clock)`
  fill: #e5e5e5;
  width: 1em;
  padding-left: 6px;
  @media ${(props) => props.theme.mediaQueries.small} {
    display: hidden;
  }
`;
const Text = styled.span`
  font-size: 13px;
  padding-left: 5px;
  padding-right: 16px;
  color: #e5e5e5;
`;

function WorkoutDuration() {
  return (
    <DurationWrapper>
      <Svg />
      <Text>{duration}</Text>
      <Text>{plan}</Text>
    </DurationWrapper>
  );
}
export default WorkoutDuration;
