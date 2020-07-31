import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getFeed } from '../actions';

import ContentCard from './ContentCard';

import Navbar from './Navbar';

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
  ${'' /*  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */}
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  justify-content: space-evenly;
  align-content: space-between;
`;

function App({ feed, getFeed, loading }) {
  useEffect(() => {
    getFeed();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <MainWrapper>
      <Navbar />
      <ContentWrapper>
        {feed.map((el) => (
          <ContentCard feedInfo={el} key={el.id} />
        ))}
      </ContentWrapper>
    </MainWrapper>
  );
}
const mapStateToProps = ({ feed, loading }) => {
  console.log(feed);
  return {
    feed,
    loading,
  };
};

export default connect(mapStateToProps, { getFeed })(App);
