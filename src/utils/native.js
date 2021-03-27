import UMengSMSPlugin from '@/native/UMengSMSPlugin';
import {smsErrorCode} from '@/code';
export const getVerificationCode = (phoneNum, smsTemplateId) => {
  return new Promise((resolve, reject) => {
    UMengSMSPlugin.getVerificationCode(
      phoneNum,
      smsTemplateId,
      function () {
        resolve(true);
      },
      function (error) {
        console.log(error);
        const code = error.split(':')[0];
        reject(smsErrorCode[code] || '获取验证码失败');
      },
    );
  });
};
export const commitVerificationCode = (phoneNum, code) => {
  return new Promise((resolve, reject) => {
    UMengSMSPlugin.commitVerificationCode(
      phoneNum,
      code,
      function (res) {
        resolve(JSON.parse(res).data.verifyStatus);
      },
      function (error) {
        const _code = error.split(':')[0];
        reject(smsErrorCode[_code] || '校验失败');
      },
    );
  });
};
