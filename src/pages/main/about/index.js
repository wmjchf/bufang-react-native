import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const About = (porps) => {
  return (
    <View>
      <Text>{porps.count}</Text>
    </View>
  );
};
const stateMapToProp = (state) => {
  return {
    count: state.count,
  };
};
export default connect(stateMapToProp)(About);
