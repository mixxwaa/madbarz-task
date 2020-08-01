import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Spinner } from '../svg/loader.svg';

const LoaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 150px;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};
export default Loading;
