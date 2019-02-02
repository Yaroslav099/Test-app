import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import profileAvatar from '../../images/profileAvatar.jpg';
import passwordImg from '../../images/password.jpg';
import { logIn } from '../../services/users';
import { navigateToSignUp, navigateToLicenseFromLogIn } from '../navigation/navigation';
import agovBig from '../../images/agovBig.png';
import AuthBtn from './AuthBtn';
import Input from './Input';
import InputErr from '../inputErr/InputErr';
import License from './License';
import InputInfoText from './InputInfoText';

class LogIn extends Component {
  state = {
    login: '',
    password: '',
    err: {
      login: false,
      password: false,
    },
  };

  logInUser = () => {
    const { login, password } = this.state;
    const errObj = logIn(login, password);
    this.setState({
      err: errObj,
    });
  };

  setLogin = login => {
    this.setState({
      login,
    });
  };

  setPassword = password => {
    this.setState({
      password,
    });
  };

  render() {
    const { login, password } = this.state;
    return (
      <View style={styles.container}>
        <Image source={agovBig} style={styles.logo} />

        <View style={styles.inputBox}>
          <Input
            image={profileAvatar}
            placeholder="Логін"
            marginTop={29}
            handlerFunc={this.setLogin}
            value={login}
          />
          {this.state.err.login ? (
            <InputErr errText="Аккаунта, з таким логiном не існує, перевірте правильність введених даних." />
          ) : null}
        </View>
        <View style={styles.inputBox}>
          <Input
            image={passwordImg}
            placeholder="Пароль"
            marginTop={32}
            handlerFunc={this.setPassword}
            value={password}
          />
          {this.state.err.password ? (
            <InputErr errText="Пароль невірний, перевірте правильність введених даних" />
          ) : (
            <InputInfoText password={password} />
          )}
        </View>

        <AuthBtn
          placeName="Увійти"
          containerStyle={styles.signUpBtnContainer}
          btnTextStyle={styles.signUpBtnText}
          childrenTopOrBottom="top"
          onPressHandler={this.logInUser}
        />

        <AuthBtn
          placeName="Зареєструватись"
          containerStyle={styles.logInBtnContainer}
          btnTextStyle={styles.logInBtnText}
          childrenTopOrBottom="top"
          onPressHandler={() => navigateToSignUp(this.props)}
        >
          <View style={styles.logInInfoContainer}>
            <Text style={styles.logInInfoText}>Вже є аккаунт?</Text>
          </View>
        </AuthBtn>

        <License
          containerStyle={styles.licenseContainer}
          onPressHandler={() => navigateToLicenseFromLogIn(this.props)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 97,
    height: 144,
    marginTop: 44,
  },
  signUpBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 154,
    backgroundColor: '#20C76E',
    height: 25,
    marginTop: 32,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  signUpBtnText: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  logInBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 154,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#757575',
    marginTop: 32,
  },
  logInBtnText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInInfoContainer: {
    position: 'relative',
    top: 31,
    alignItems: 'center',
    justifyContent: 'center',
    width: 127,
    height: 12,
  },
  logInInfoText: {
    color: '#757575',
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputBox: {
    position: 'relative',
  },
  licenseContainer: {
    width: 191,
    height: 24,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
});

export default LogIn;
