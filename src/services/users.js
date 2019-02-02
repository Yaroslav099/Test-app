const users = [{ login: 'admin', password: '12341234', email: 'admin@gmail.com' }];

const logIn = (loginValue, passwordValue) => {
  let loginErr = false;
  let passwordErr = false;
  if (loginValue !== users[0].login) {
    loginErr = true;
  }
  if (passwordValue !== users[0].password) {
    passwordErr = true;
  }
  alert(loginValue);
  alert(loginValue);
  return {
    login: loginErr,
    password: passwordErr,
  };
};

const signUp = (loginValue, passwordValue, emailValue, secondPasswordValue) => {
  let loginErr = false;
  let passwordErr = false;
  let emailErr = false;
  if (loginValue === users[0].login) {
    loginErr = true;
  }
  if (passwordValue !== secondPasswordValue) {
    passwordErr = true;
  }
  if (emailValue === users[0].email) {
    emailErr = true;
  }

  return {
    login: loginErr,
    password: passwordErr,
    email: emailErr,
  };
};

export { logIn, signUp };
