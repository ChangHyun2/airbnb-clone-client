import {
  houseIcon,
  adventureIcon,
  helpIcon,
  profileCardIcon,
  settingIcon,
  giftBoxIcon,
  tropyIcon,
} from '@UI/SVGIcon/Icons';

const navListData = [
  {
    id: 0,
    items: [
      {
        Icon: profileCardIcon,
        title: '개인정보',
      },
      {
        Icon: settingIcon,
        title: '계정',
      },
    ],
  },
  {
    id: 1,
    title: '호스팅',
    items: [
      {
        Icon: houseIcon,
        title: '숙소 호스팅',
      },
      {
        Icon: adventureIcon,
        title: '체험 호스팅',
      },
    ],
  },
  {
    id: 2,
    title: '추천 및 크레딧',
    items: [
      {
        Icon: giftBoxIcon,
        title: '친구 초대하기',
        info:
          '초대받은 친구가 가입하면, 조건을 충족하는 예약에 대해 최대 574 kr SEK의 할인 혜택을 받게 됩니다.',
      },
      {
        Icon: tropyIcon,
        title: '호스트 초대하기',
      },
    ],
  },
  {
    id: 3,
    title: '지원 서비스',
    items: [
      {
        Icon: helpIcon,
        title: '에어비앤비 이용 방법',
      },
      {
        Icon: helpIcon,
        title: '도움말',
      },
      {
        Icon: helpIcon,
        title: '이웃 민원 지원 서비스에 연락하기',
        info:
          '거주하고 계신 지역에서 일어나는 홈셰어링 활동에 대한 우려 사항을 에어비엔비에 알려주세요.',
      },
    ],
  },
];

export default navListData;
