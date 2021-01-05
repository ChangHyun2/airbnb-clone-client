import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import s from 'S';
import { logoutUser } from '@store/actions/authActions';
import NavLists from './mobileProfile/NavLists';
import { Profile } from './MobileProfile.styled';
import { MobileAvatar } from '@UI/Avatar';
import { SecondaryGhostButton } from '@UI/Button/GhostButton';
import { MobileWrapper } from '@UI/Wrapper';

function MobileProfile() {
  const userName = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <MobileWrapper>
      <Profile>
        <s.Col>
          <h1>{`${userName}님 안녕하세요.`}</h1>
          <div>
            <SecondaryGhostButton href={'#'}>프로필 보기</SecondaryGhostButton>
            <SecondaryGhostButton
              onClick={() => {
                fetch('http://localhost:3000/api/auth/logout')
                  .then((res) => res.json())
                  .then((data) => {
                    const user = { data };
                    dispatch(logoutUser());
                    history.replace('/');
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
            >
              로그 아웃
            </SecondaryGhostButton>
          </div>
        </s.Col>
        <MobileAvatar />
      </Profile>

      <NavLists />
      {/* <Locale /> */}
    </MobileWrapper>
  );
}

export default MobileProfile;
