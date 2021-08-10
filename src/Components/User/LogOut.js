import React, { Component } from 'react';
import { clearSession } from '../../Common/Utility';


class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  signOutUser = () => {
    if (this.state.user) {
      clearSession();
      this.props.history.replace('/signin');
    }
  };

  render() {
    return (
      <>
        {!!localStorage.getItem('token') ? (
          <button className="button is-info mt-1">Log Out</button>
        ) : (
          null
        )}
        
      </>
    );
  }
}


export default LogOut;
