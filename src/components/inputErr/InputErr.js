import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InputErr = ({ errText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -26,
    left: 0,
    width: 260,
    height: 25,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 10,
    fontSize: 10,
    color: '#E84146',
  },
});

export default InputErr;
