import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { navigateToSignUp, navigateToLogIn } from '../navigation/navigation';
import { withNavigation } from 'react-navigation';
import AuthBtn from '../logIn/AuthBtn';
import licenseText from './LicenseText';

class License extends Component {
  render() {
    const whichBtn = this.props.navigation.getParam('btn');
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>
              Ліцензійна угода Агоов<Text>™</Text>
            </Text>
          </View>

          <ScrollView style={styles.mainTextContainer}>
            <Text style={styles.mainText}>{licenseText()}</Text>
          </ScrollView>
          {whichBtn ? (
            <AuthBtn
              placeName="Повернутися до входу в додаток"
              containerStyle={styles.greenBtnContainer}
              btnTextStyle={styles.greenBtnText}
              onPressHandler={() => navigateToLogIn(this.props)}
            />
          ) : (
            <AuthBtn
              placeName="Повернутися до реєстрації"
              containerStyle={styles.greenBtnContainer2}
              btnTextStyle={styles.greenBtnText}
              onPressHandler={() => navigateToSignUp(this.props)}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 530,
    width: 300,
    alignItems: 'center',
    marginTop: 50,
  },
  greenBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 276,
    backgroundColor: '#20C76E',
    height: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 20,
  },
  greenBtnContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    backgroundColor: '#20C76E',
    height: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 20,
  },
  greenBtnText: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextContainer: {
    width: 300,
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 11.3,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  mainTextContainer: {
    marginTop: 20,
  },
  mainText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 12,
    fontSize: 12,
    color: '#000000',
  },
});

export default withNavigation(License);
