/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
// eslint-disable-next-line import/no-extraneous-dependencies

import { getFeed, respectWorkout, updateFeed } from '../actions';

import ContentCard from '../components/ContentCard';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
const ContentWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  padding: 2rem 4rem 2rem 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 2rem 0em 2rem 0rem;
  }
`;

const App = ({ feed, getFeed, updateFeed, loading }) => {
  useEffect(() => {
    getFeed();
  }, []);

  const RenderedCards = feed.map((el) => (
    <ContentCard feedInfo={el} key={el.id} />
  ));

  return (
    <MainWrapper>
      <Navbar />
      <ContentWrapper>{loading ? <Loading /> : RenderedCards}</ContentWrapper>
      {!loading && (
        <div>
          <Waypoint bottomOffset="-800px" onEnter={() => updateFeed()} />
        </div>
      )}
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

export default connect(mapStateToProps, {
  getFeed,
  respectWorkout,
  updateFeed,
})(App);
