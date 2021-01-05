import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  border-radius: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Avatar = ({
  src = 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
  ...otherProps
}) => (
  <Wrapper {...otherProps}>
    <Img src={src} />
  </Wrapper>
);

export const MobileAvatar = styled(Avatar)`
  width: 72px;
  height: 72px;
`;

export default Avatar;
