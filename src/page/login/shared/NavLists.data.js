import { helpIcon, adventureIcon, houseIcon } from '@UI/SVGIcon/Icons';

const navListData = [
  {
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
          '거주하고 계신 지역에서 일어나는 홈셰어링 활동에 대한 우려 사항을 에어비앤비에 알려주세요.',
      },
    ],
  },
];

export default navListData;
