import React, { Component } from 'react';
import { TextInput, StyleSheet, Image, View } from 'react-native';

class Input extends Component {
  render() {
    const { image, placeholder, marginTop, value, handlerFunc } = this.props;
    return (
      <View style={{ marginTop: marginTop }}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#000000"
            value={value}
            onChangeText={text => handlerFunc(text, type)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 260,
    height: 36,
    borderWidth: 0.25,
    borderColor: '#E9E9E9',
    borderRadius: 5,
    shadowColor: '#E5E5E5',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    elevation: 1,
  },
  image: {
    position: 'absolute',
    left: 15,
    zIndex: 10,
  },
  input: {
    width: '100%',
    height: '100%',
    margin: 0,
    paddingLeft: 41,
  },
});

export default Input;
