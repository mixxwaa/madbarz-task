import React from 'react';
import styled from 'styled-components';

import data from '../../data.json';

const Wrapper = styled.div`
  position: relative;
  text-align: center;
`;
const Gradient = styled.div`
  position: absolute;
  background: linear-gradient(
    179.86deg,
    rgba(0, 0, 0, 0) 35.11%,
    #000000 99.85%
  );
  height: 100%;
  width: 100%;
`;

const WorkoutImg = styled.img`
  width: 100%;
  height: 100%;
`;

function WorkoutPhoto() {
  return (
    <Wrapper>
      <Gradient />
      <WorkoutImg
        src="https://madbarzpictures.blob.core.windows.net/madbarzpictures/bcb24e65-8022-4035-889f-8ed3a151ab84_d_wrkt.jpeg"
        alt="#"
      />
    </Wrapper>
  );
}

export default WorkoutPhoto;
