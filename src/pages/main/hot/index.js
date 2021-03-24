import React from 'react';
import {View, Text, Button} from 'react-native';
import WangPlugin from '../../../native/WangPlugin';
import IconFont from '../../../iconfont';
const Hot = () => {
  console.log(WangPlugin);
  const onPress = () => {
    WangPlugin.show('我的插件', WangPlugin.SHORT);
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
