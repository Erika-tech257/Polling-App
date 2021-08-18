import React, { Component } from "react";
import { clearSession } from "../../Common/Utility";
import { NavLink, NavItem } from "reactstrap";

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
      this.props.history.replace("/signin");
    }
  };
  render() {
    return (
      <>
        {!!localStorage.getItem("token") ? (
          <NavItem>
            <NavLink className="navbar-brand" href="#">
              Logout
            </NavLink>
          </NavItem>
        ) : null}
      </>
    );
  }
}

export default LogOut;
