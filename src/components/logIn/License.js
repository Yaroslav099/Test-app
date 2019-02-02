import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const License = ({ containerStyle, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={containerStyle}>
        <Text style={styles.mainText}>При реєстрації ви погоджуєтесь з</Text>
        <Text style={styles.links}>правилами</Text>
        <Text style={styles.mainText}>і</Text>
        <Text style={styles.links}>ліцензійною угодою</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 10,
    color: '#757575',
    paddingLeft: 3,
    paddingRight: 3,
  },
  links: {
    fontSize: 10,
  },
});

export default License;
