import { Redirect } from 'react-router-dom';


export const clearSession = () => localStorage.clear();



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

export const defaultHomePage = `/pollingQuestions`;
export const adminHomePage = `/createPoll`;

export const getHomePage = () =>
  getIsAdmin() ? adminHomePage : defaultHomePage;

export const isLoggedIn = () => !!localStorage.getItem('token');


