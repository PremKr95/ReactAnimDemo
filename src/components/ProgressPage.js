import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Easing,
} from 'react-native';
const _width = Dimensions.get('window').width;

class ProgressPage extends Component {
  constructor(props) {
    super(props);
    this.progessValue = new Animated.Value(0);
    this.state = {};
  }

  progress() {
    this.progessValue.setValue(0);
    Animated.timing(this.progessValue, {
      toValue: _width,
      duration: 500,
      easing: Easing.linear,
    });
  }

  render() {
    return <View />;
  }
}

export default ProgressPage;

const styles = StyleSheet.create({});
