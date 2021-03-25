import React from 'react';
import {View, Text, Button} from 'react-native';
import UMengSMSPlugin from '../../../native/UMengSMSPlugin';
import IconFont from '../../../iconfont';
const Hot = () => {
  console.log(UMengSMSPlugin);
  const onPress = () => {
    UMengSMSPlugin.getVerificationCode(
      '15868843247',
      'SMS_213551111',
      function (res) {
        console.log(res);
      },
      function (error) {
        console.log(error);
      },
    );
  };
  return (
    <View>
      <Text>HOT</Text>
      <IconFont name="diyi" size={30} color="red" />
      <Button title="Toast" onPress={onPress} />
    </View>
  );
};
export default Hot;
