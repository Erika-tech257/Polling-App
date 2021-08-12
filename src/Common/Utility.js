import { Redirect } from 'react-router-dom';

// export const currentID = localStorage.getItem('userID')
// if (currentID) {
//   this.setState({ CurrentUser: currentID})
// }
// export const updateUser = (firstName) => {
//   localStorage.setItem('firstName', firstName)
//   this.setState({CurrentUser: firstName})
// }

export const clearSession = () => localStorage.clear()


export const withAuth = (Component) => {
  return () => {
    if (isLoggedIn()) {
      return <Component />;
    } else {
      <Redirect to="/signin" />;
    }
  };
};

export const SignInUser = ({ history }) => {
  localStorage.setItem('token', 'same-login-token');
  history.push('/profile/mansa');
};

export const createAuthIdentity = (userInfo) => {
  clearSession();
  localStorage.setItem('token', userInfo.sessionToken);
  localStorage.setItem('email', userInfo.user.email);
  localStorage.setItem('isAdmin', userInfo.user.isAdmin);
  localStorage.setItem('userId', userInfo.user.id);
};

export const getIsAdmin = () => localStorage.getItem('isAdmin');

export const defaultHomePage = `/signin`;
export const adminHomePage = `/adminWelcomPage/:firstName`;

export const getHomePage = () =>
  getIsAdmin() ? adminHomePage : defaultHomePage;

export const isLoggedIn = () => !!localStorage.getItem('token');


