import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InputInfoText = ({ password }) => {
  if (password !== '') {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Немає облікового запису?</Text>
      </View>
    );
  } else return null;
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
    color: '#757575',
  },
});

export default InputInfoText;
