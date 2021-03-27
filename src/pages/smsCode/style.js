import {StyleSheet} from 'react-native';
import commonStyle from '@/style/common';

const styles = StyleSheet.create({
  code: {
    backgroundColor: '#fff',
  },
  codeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  codeTip: {
    fontSize: 15,
    color: '#b7b7b7',
    marginTop: 20,
  },
  codeTitleContainer: {
    padding: 24,
    // marginTop: 0,
  },
  phoneNum: {
    color: commonStyle.primary,
  },
  telephoneContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    marginTop: 80,
  },
  codeContent: {
    flexDirection: 'row',
    position: 'relative',
  },
  inputContainer: {
    flex: 1,
    borderColor: '#eee',
    borderWidth: 1,
    fontSize: 20,
    marginRight: 12,
    borderRadius: 5,
    height: 50,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  codeInputLast: {
    marginRight: 0,
  },
  codeInput: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  intextInputStyle: {
    position: 'absolute',
    width: 400,
    height: 40,
    fontSize: 25,
    color: 'transparent',
    opacity: 0,
  },
  sendCode: {
    height: 50,
    backgroundColor: commonStyle.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 80,
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
