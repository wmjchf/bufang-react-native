import React, {useState, useRef} from 'react';
import {View, StatusBar, Text, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import {setting} from '@/config';
import {getVerificationCode} from '@/utils/native';
// import DeviceInfo from 'react-native-device-info';
import {Loading} from '@/components/Loading';
import {checkPhoneNumber} from '@/utils/check';
const statusBarConfig = {
  backgroundColor: 'white',
};
const Login = (props) => {
  const [phoneNum, setPhoneNum] = useState('');
  const changePhoneNum = (phone) => setPhoneNum(phone);
  const sendCode = async () => {
    if (phoneNum) {
      if (!checkPhoneNumber(phoneNum)) {
        global.toast.show('请输入正确的手机号', 1000);
        return;
      }
      try {
        loading.current.showLoading();
        await getVerificationCode(phoneNum, setting.smsTemplateId);
        props.navigation.navigate('code', {phoneNum});
      } catch (error) {
        global.toast.show(error, 1000);
      } finally {
        loading.current.dismissLoading();
      }
    } else {
      global.toast.show('请输入手机号', 1000);
    }
  };
  const loading = useRef(null);
  return (
    <View style={[styles.login, {height: props.height}]}>
      <StatusBar {...statusBarConfig} />
      <Loading ref={loading} tip="正在获取验证码..." />
      <View style={styles.loginTitleContainer}>
        <Text style={styles.loginTitle}>欢迎来到我的世界</Text>
      </View>
      <View style={[styles.telephoneContainer, {height: props.height - 306}]}>
        <TextInput
          style={styles.telephoneInput}
          value={phoneNum}
          placeholder="请输入手机号"
          onChangeText={changePhoneNum}
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          maxLength={11}
        />
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.sendCode}
            onPress={sendCode}
            activeOpacity={1}>
            <Text style={styles.buttonColor}>获取验证码</Text>
          </TouchableOpacity>
          <View style={styles.tipContainer}>
            <Text style={styles.tip1}>注册即表示接受</Text>
            <TouchableOpacity>
              <Text style={styles.tip2}>《隐私保护》</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const stateMapToProp = (state) => {
  return {
    width: state.global.width,
    height: state.global.height,
  };
};
export default connect(stateMapToProp)(Login);
