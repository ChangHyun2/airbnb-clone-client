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
    to: '/signin',
    text: '로그인',
    logo: 'login',
    isAuth: false,
  },
  {
    to: '/trips',
    text: '여행',
    logo: 'airbnb',
    isAuth: true,
  },
  {
    to: '/message',
    text: '메시지',
    logo: 'message',
    isAuth: true,
  },
  {
    to: '/profile',
    text: '프로필',
    logo: 'profile',
    isAuth: true,
  },
];

export default navItems;
