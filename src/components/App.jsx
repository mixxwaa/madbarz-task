import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getFeed, respectWorkout } from '../actions';

import ContentCard from './ContentCard';
import Loading from './Loading';
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
  @media ${(props) => props.theme.mediaQueries.small} {
    display: block;
  }
`;

function App({ feed, getFeed, loading }) {
  useEffect(() => {
    getFeed();
  }, []);

  return (
    <MainWrapper>
      <Navbar />
      <ContentWrapper>
        {loading ? <Loading /> : RenderCards(feed)}
      </ContentWrapper>
    </MainWrapper>
  );
}

function RenderCards(feed) {
  return feed.map((el) => <ContentCard feedInfo={el} key={el.id} />);
}

const mapStateToProps = ({ feed, loading }) => {
  if (Object.keys(feed).length) {
    return {
      feed: Object.keys(feed.byId).map((key) => feed.byId[key]),
      loading,
    };
  }
  return { feed: [], loading };
};

export default connect(mapStateToProps, { getFeed, respectWorkout })(App);
