const navItems = [
  {
    to: '/',
    exact: true,
    text: '둘러보기',
    logo: 'search',
  },
  {
    to: '/wishlists',
    text: '저장 목록',
    logo: 'heart',
  },
  {
    to: '/login',
    text: '로그인',
    isAuth: false,
    logo: 'login',
  },
  {
    to: '/trips',
    text: '여행',
    isAuth: true,
    logo: 'airbnb',
  },
  {
    to: '/inbox',
    text: '메시지',
    isAuth: true,
    logo: 'message',
  },
  {
    to: '/account-setting',
    text: '프로필',
    isAuth: true,
    logo: 'profile',
  },
];

export default navItems;
