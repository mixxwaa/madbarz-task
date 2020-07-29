import React from 'react';

import styled from 'styled-components';

const AvatarImage = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
`;

const Avatar = ({ src, alt }) => {
  return <AvatarImage src={src} alt={alt} />;
};

export default Avatar;
