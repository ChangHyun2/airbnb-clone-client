import styled from '@emotion/styled';

import {
  airbnbIcon,
  loginIcon,
  heartIcon,
  messageIcon,
  profileIcon,
  searchIcon,
} from '@UI/SVGIcon/Icons';

const Icons = Object.entries({
  airbnbIcon,
  loginIcon,
  heartIcon,
  messageIcon,
  profileIcon,
  searchIcon,
}).reduce((icons, entry) => {
  const [iconName, icon] = entry;

  return {
    ...icons,
    [iconName]: styled(icon)`
      width: 24px;
      height: 24px;
      fill: #aaa;
    `,
  };
}, {});

// Object.keys(Icon).forEach((key) => {
//   Icons[key].displayName = key.charAt(0).toUpperCase() + key.slice(1) + 'Icon';
//   console.log(Icons[key].displayName);
// });

export default Icons;
