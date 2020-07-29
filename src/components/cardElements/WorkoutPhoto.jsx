import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: red;
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
  display: block;
  height: auto;
  width: 100%;
`;

function WorkoutPhoto() {
  return (
    <Wrapper>
      <Gradient />
      <WorkoutImg
        src="https://s3-alpha-sig.figma.com/img/13c3/ce16/b3c6cba478415d8f543d454133937c7e?Expires=1597017600&Signature=NSK7-oCLgvgE3ESZ7XWg-OJpHzuABD~IseboCIkAoWww-rNFzsyOQbRMsH5Yw61ULZTsCb3FUTmms4LFNcLtGkLjxrjLAjTZtuNJJss4D5yeYD4BrGCA8SKCyh8TC1M0n5j6wBGjHHwNDfXMTrGHG6T8X-J3FffOdd~Vorui6cmDpqnaO90X0oclXJBS1YWt7yZmDfBp8UnT42OViCo2jNNB3YLJbXEoAxDl7RruBN0MJc~x~4xniq5OvKoA2zG3PuLmdMf3lOuS61XfBmY4UIsjorR2SEHCun1Y1zeLZpHnOUaWBE4wMU0QE5jniQb2e6InV1aZYW0H1FYXNRmcjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="#"
      />
    </Wrapper>
  );
}

export default WorkoutPhoto;
