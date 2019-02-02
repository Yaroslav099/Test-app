import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class AuthBtn extends Component {
  render() {
    const {
      placeName,
      containerStyle,
      btnTextStyle,
      childrenTopOrBottom,
      onPressHandler,
    } = this.props;

    let topChildren = null,
      bottomChildren = null;

    if (childrenTopOrBottom === 'top') {
      topChildren = this.props.children;
    } else if (childrenTopOrBottom === 'bottom') {
      bottomChildren = this.props.children;
    }

    return (
      <React.Fragment>
        {topChildren}
        <View style={containerStyle}>
          <TouchableOpacity onPress={onPressHandler}>
            <Text style={btnTextStyle}>{placeName}</Text>
          </TouchableOpacity>
        </View>
        {bottomChildren}
      </React.Fragment>
    );
  }
}

AuthBtn.defaultProps = {
  onPressHandler: () => {},
};

export default AuthBtn;
