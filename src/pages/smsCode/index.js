import React, {useState, useRef} from 'react';
import {View, StatusBar, Text, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getVerificationCode} from '@/utils/native';
import {setting} from '@/config';
import {Loading} from '@/components/Loading';
import {SetInterval} from '@/components/SetInterval';
import {Cursor} from '@/components/Cursor';
import {login} from '@/api/login';
import StorageUtil from '@/libs/storage';
import styles from './style';
const statusBarConfig = {
  backgroundColor: 'white',
};
const Code = (props) => {
  const codeNum = new Array(6).fill('');
  const [codeStr, setCodeStr] = useState('');
  const [isResetCode, setIsResetCode] = useState(false);
  const {phoneNum, token} = props.route.params;
  const changeCodeStr = (values) => {
    setCodeStr(values);
  };
  const confirmCode = async () => {
    if (codeStr.length === 6) {
      const umengVcode = codeStr;
      const umengToken = token;
      const phoneNumber = phoneNum;
      try {
        const result = await login({phoneNumber, umengToken, umengVcode});
        const {accessToken, refreshToken} = result.data;
        StorageUtil.save('accessToken', accessToken);
        StorageUtil.save('refreshToken', refreshToken);
        global.toast.show('登录成功', 1000);
      } catch (error) {
        console.log(error);
      }
      // try {
      //   loading.current.showLoading();
      //   const verifyStatus = await commitVerificationCode(phoneNum, codeStr);
      //   if (verifyStatus) {
      //     global.toast.show('登录成功', 1000);
      //   } else {
      //     global.toast.show('验证码不正确', 1000);
      //   }
      // } catch (error) {
      //   global.toast.show(error, 1000);
      // } finally {
      //   loading.current.dismissLoading();
      // }
    } else {
      global.toast.show('请输入6位验证码', 1000);
    }
  };
  const sendCode = async () => {
    try {
      await getVerificationCode(phoneNum, setting.smsTemplateId);
    } catch (error) {
      global.toast.show(error, 1000);
    }
  };
  const loading = useRef(null);
  //   const opacityAnimate = () => {
  //     opacityStart.setValue(0);
  //     Animated.timing(
  //       // 随时间变化而执行动画
  //       opacityStart, // 动画中的变量值
  //       {
  //         toValue: 1,
  //         duration: 500,
  //         useNativeDriver: false,
  //       },
  //     ).start(() => opacityAnimate);
  //   };
  //   const opacity = opacityStart.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [0, 1],
  //   });
  //   useEffect(() => {
  //     opacityAnimate();
  //   }, []);
  return (
    <View style={[styles.code, {height: props.height}]}>
      <StatusBar {...statusBarConfig} />
      <Loading ref={loading} tip="正在登录..." />
      <View style={styles.codeTitleContainer}>
        <Text style={styles.codeTitle}>输入验证码</Text>
        <Text style={styles.codeTip}>
          已发送6位验证码至 <Text style={styles.phoneNum}>{phoneNum}</Text>
        </Text>
      </View>
      <View style={[styles.telephoneContainer]}>
        <View style={styles.codeContent}>
          {codeNum.map((_, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.inputContainer,

                  index === 5 ? styles.codeInputLast : '',
                ]}>
                <Text style={styles.codeInput} key={index}>
                  {codeStr.split('')[index]}
                </Text>
                {codeStr.length === index && <Cursor />}
              </View>
            );
          })}
          <TextInput
            style={styles.intextInputStyle}
            onChangeText={changeCodeStr}
            underlineColorAndroid="transparent"
            maxLength={6}
            autoFocus={true}
            keyboardType="numeric"
            selectionColor="transparent"
          />
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.sendCode}
            onPress={confirmCode}
            activeOpacity={1}>
            <Text style={styles.buttonColor}>确认</Text>
          </TouchableOpacity>
          {!isResetCode && (
            <View style={styles.tipContainer}>
              <Text style={styles.tip1}>重新获取</Text>
              <SetInterval time={60} endCallback={() => setIsResetCode(true)} />
            </View>
          )}
          {isResetCode && (
            <View style={styles.tipContainer}>
              <TouchableOpacity onPress={sendCode}>
                <Text style={styles.tip2}>重新获取</Text>
              </TouchableOpacity>
            </View>
          )}
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
export default connect(stateMapToProp)(Code);
