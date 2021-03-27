import {StyleSheet} from 'react-native';
import commonStyle from '@/style/common';

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#fff',
  },
  loginTitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  loginTitleContainer: {
    padding: 24,
    marginTop: 40,
  },
  telephoneContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    marginTop: 80,
  },
  telephoneInput: {
    borderColor: commonStyle.primary,
    borderWidth: 1,
    fontSize: commonStyle.fontSize8,
    borderRadius: 5,
    paddingLeft: 10,
  },
  sendCode: {
    height: 50,
    backgroundColor: commonStyle.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonColor: {
    color: '#fff',
    fontSize: commonStyle.fontSize7,
  },
  bottomContainer: {
    justifyContent: 'flex-start',
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  tip1: {
    color: '#909399',
  },
  tip2: {
    color: commonStyle.primary,
  },
});

export default styles;
