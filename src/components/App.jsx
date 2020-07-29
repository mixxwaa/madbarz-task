import React from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard';

const Wrapper = styled.div`
  max-width: 100%;
`;
function App() {
  return (
    <div>
      <ContentCard />
    </div>
  );
}

export default App;
