import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { navigateToLogIn, navigateToLicenseFromSignUp } from '../navigation/navigation';
import { withNavigation } from 'react-navigation';
import agovSm from '../../images/agovSm.jpg';
import profileAvatar from '../../images/profileAvatar.jpg';
import passwordImg from '../../images/password.jpg';
import emailImg from '../../images/email.jpg';
import Input from '../logIn/Input';
import AuthBtn from '../logIn/AuthBtn';
import License from '../logIn/License';
import { signUp } from '../../services/users';
import InputErr from '../inputErr/InputErr';

class SignUp extends Component {
  state = {
    login: '',
    password: '',
    email: '',
    secondPassword: '',
    err: {
      login: false,
      password: false,
      email: false,
    },
  };

  signUpUser = () => {
    const { login, password, email, secondPassword } = this.state;
    const errObj = signUp(login, password, email, secondPassword);
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

  setSecondPassword = secondPassword => {
    this.setState({
      secondPassword,
    });
  };

  setEmail = email => {
    this.setState({
      email,
    });
  };

  render() {
    const { login, password, email, secondPassword } = this.state;
    return (
      <View style={styles.container}>
        <Image source={agovSm} style={styles.logo} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Реєстрація</Text>
        </View>
        <View style={styles.inputBox}>
          <Input
            image={profileAvatar}
            placeholder="Логін"
            marginTop={11}
            handlerFunc={this.setLogin}
            value={login}
          />
          {this.state.err.login ? (
            <InputErr errText="Такий логін вже існує. Спробуйте iнший." />
          ) : null}
        </View>
        <View style={styles.inputBox}>
          <Input
            image={emailImg}
            placeholder="E-mail"
            marginTop={29}
            handlerFunc={this.setEmail}
            value={email}
          />
          {this.state.err.email ? (
            <InputErr errText="Такий e-mail вже зареєстрований. Спробуйте iнший" />
          ) : null}
        </View>

        <Input
          image={passwordImg}
          placeholder="Пароль"
          marginTop={29}
          handlerFunc={this.setPassword}
          value={password}
        />
        <View style={styles.inputBox}>
          <Input
            image={passwordImg}
            placeholder="Підтвердіть пароль"
            marginTop={29}
            handlerFunc={this.setSecondPassword}
            value={secondPassword}
          />
          {this.state.err.password ? (
            <InputErr errText="Пароль не збігається з попереднім" />
          ) : null}
        </View>
        <AuthBtn
          placeName="Зареєструватись"
          containerStyle={styles.signUpBtnContainer}
          btnTextStyle={styles.signUpBtnText}
          childrenTopOrBottom="bottom"
          onPressHandler={this.signUpUser}
        >
          <License
            containerStyle={styles.licenseContainer}
            onPressHandler={() => navigateToLicenseFromSignUp(this.props)}
          />
        </AuthBtn>

        <AuthBtn
          placeName="Увійти"
          containerStyle={styles.logInBtnContainer}
          btnTextStyle={styles.logInBtnText}
          childrenTopOrBottom="top"
          onPressHandler={() => navigateToLogIn(this.props)}
        >
          <View style={styles.logInInfoContainer}>
            <Text style={styles.logInInfoText}>Вже є аккаунт?</Text>
          </View>
        </AuthBtn>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  licenseContainer: {
    width: 191,
    height: 24,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  logo: {
    marginTop: 46,
  },
  headerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 23,
    width: 220,
    height: 11,
  },
  signUpBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 154,
    backgroundColor: '#20C76E',
    height: 25,
    marginTop: 41,
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
    marginTop: 56,
  },
  logInBtnText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInInfoContainer: {
    position: 'relative',
    top: 55,
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
});

export default withNavigation(SignUp);
