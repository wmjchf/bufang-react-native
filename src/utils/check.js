import {phoneNumberReg} from '@/reg';
export const checkPhoneNumber = (phoneNumber) => {
  return phoneNumberReg.test(phoneNumber);
};
