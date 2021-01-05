import axios from '@/axios';

const createResetPasswordMsg = (email, name) => {
  return {
    to: email,
    from: 'jchangh2@gmail.com',
    subject: 'airbnb-clone 비밀번호 재설정 요청',
    text: '비밀번호를 재설정',
    html: `<div>
      ${name}님 안녕하세요.
      <br>
      비밀번호 재설정을 요청하셨습니다.
      <br>
      직접 요청하신 적이 없다면 이 메시지는 무시하세요. 아니라면 비밀번호를 다시 설정하실 수 있습니다.
      <a style='padding:10px;color:white;background-color:red; border-radius:5px;'>비밀번호 재설정하기</a>
      <br>
      감사합니다.
      <br>
      에어비앤비 드림.
      <hr>
      <div>‌A‌i‌r‌b‌n‌b‌,‌ ‌I‌n‌c‌.‌,‌ ‌8‌8‌8‌ ‌B‌r‌a‌n‌n‌a‌n‌ ‌S‌t‌,‌ ‌S‌a‌n‌ ‌F‌r‌a‌n‌c‌i‌s‌c‌o‌,‌ ‌C‌A‌ ‌9‌4‌1‌0‌3‌</div>
    </div>`,
  };
};

export const sendResetPasswordEmail = (email, name) =>
  axios
    .post('/api/email/send', createResetPasswordMsg(email, name))
    .then((res) => {
      console.log('success sent reset password email', res);
    })
    .catch((e) => {
      throw new Error(e);
    });
