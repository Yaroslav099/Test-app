const navigateToSignUp = props => {
  props.navigation.navigate('SignUp');
};

const navigateToLogIn = props => {
  props.navigation.navigate('LogIn');
};

const navigateToLicenseFromSignUp = props => {
  props.navigation.navigate('License', { btn: false });
};

const navigateToLicenseFromLogIn = props => {
  props.navigation.navigate('License', { btn: true });
};

export {
  navigateToLogIn,
  navigateToSignUp,
  navigateToLicenseFromLogIn,
  navigateToLicenseFromSignUp,
};
