import React from 'react';
import { AlertHeadPopup } from '@UI/HeadPopup';
import { PrimaryButton } from '@UI/Button/Button';
import { useToggle } from '@hooks';

export default {
  title: 'HeadPopup',
};

export const HeadPopup = () => {
  const { on, setOn, setOff } = useToggle(false);

  return (
    <>
      <AlertHeadPopup
        show={on}
        message={'경고 팝업입니다. 닫기 버튼을 누르면 팝업이 제거됩니다.'}
        onClick={() => setOff()}
      />
      <PrimaryButton onClick={() => setOn()}>toggle Popup</PrimaryButton>
    </>
  );
};
