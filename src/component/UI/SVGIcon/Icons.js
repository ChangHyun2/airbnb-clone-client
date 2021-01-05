import React from 'react';
import styled from '@emotion/styled';
import { useWithViewbox } from '@hooks';
import { center } from 'S';
import path from './path';

const Wrapper = styled.div`
  ${center}
`;

const createIcon = (svg) =>
  React.forwardRef(
    (
      { xmlns = 'http://www.w3.org/2000/svg', onClick, className, ...others },
      ref
    ) => {
      const svgRef = React.useRef(ref);
      useWithViewbox(svgRef);

      return (
        <Wrapper>
          <svg
            ref={svgRef}
            className={className}
            xmlns={xmlns}
            dangerouslySetInnerHTML={{ __html: svg }}
            {...others}
          />
        </Wrapper>
      );
    }
  );

export const heartIcon = createIcon(path.heart);
export const searchIcon = createIcon(path.search);
export const messageIcon = createIcon(path.message);
export const profileIcon = createIcon(path.profile);
export const closeIcon = createIcon(path.close);
export const loginIcon = createIcon(path.login);
export const airbnbIcon = createIcon(path.airbnb);
export const googleIcon = createIcon(path.google);
export const facebookIcon = createIcon(path.facebook);
export const houseIcon = createIcon(path.house);
export const adventureIcon = createIcon(path.adventure);
export const helpIcon = createIcon(path.help);
export const emailIcon = createIcon(path.email);
export const profileCardIcon = createIcon(path.profileCard);
export const tropyIcon = createIcon(path.trophy);
export const giftBoxIcon = createIcon(path.giftBox);
export const settingIcon = createIcon(path.setting);
export const arrowLeftIcon = createIcon(path.arrowLeft);
export const alertIcon = createIcon(path.alert);

const Icons = {
  heart: heartIcon,
  message: messageIcon,
  airbnb: airbnbIcon,
  profile: profileIcon,
  search: searchIcon,
  login: loginIcon,
  airbnb: airbnbIcon,
  google: googleIcon,
  close: closeIcon,
  facebook: facebookIcon,
  house: houseIcon,
  email: emailIcon,
  profileCard: profileCardIcon,
  tropy: tropyIcon,
  giftBox: giftBoxIcon,
  setting: settingIcon,
  arrowLeft: arrowLeftIcon,
  alert: alertIcon,
};

export default Icons;
