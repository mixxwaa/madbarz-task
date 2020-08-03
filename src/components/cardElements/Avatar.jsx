import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Elipse } from '../../svg/Ellipse.svg';

const AvatarImage = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
`;
const AvatarWrap = styled.div`
  padding-top: 12px;
  padding-left: 14px;
  position: relative;
`;
const PremiumIcon = styled(Elipse)`
  position: absolute;
  bottom: 10px;
  right: 0;
`;

const Avatar = ({ src, premium }) => {
  return (
    <AvatarWrap>
      <AvatarImage src={src} alt="" />
      {premium && <PremiumIcon />}
    </AvatarWrap>
  );
};

export default Avatar;
