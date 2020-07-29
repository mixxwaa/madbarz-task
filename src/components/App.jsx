import React from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;
const ContentWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

function App() {
  return (
    <MainWrapper>
      <ContentWrapper>
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </ContentWrapper>
    </MainWrapper>
  );
}

export default App;
