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
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  ${'' /* position: relative; */}
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
  padding: 2rem 4rem 2rem 4rem;
  display: flex;
  flex-wrap: wrap;
  ${'' /* grid-template-columns: repeat(auto-fit, minmax(375px, 2fr)); */}
  justify-content: center;
  align-content: center;

  @media (max-width: 600px) {
    padding: 2rem 0em 2rem 0rem;
  }
`;

const App = ({ feed, getFeed, loading }) => {
  useEffect(() => {
    getFeed();
  }, []);

  const RenderCards = (feed) => {
    return feed.map((el) => <ContentCard feedInfo={el} key={el.id} />);
  };

  return (
    <MainWrapper>
      <Navbar />
      <ContentWrapper>
        {loading ? <Loading /> : RenderCards(feed)}
      </ContentWrapper>
    </MainWrapper>
  );
};

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
