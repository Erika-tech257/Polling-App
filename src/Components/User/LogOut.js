import React, { Component, useState } from "react";
import { clearSession } from "../../Common/Library";
import { NavLink, NavItem, Button } from "reactstrap";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

// class LogOut extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {},
//     };
//   }

//   signOutUser = () => {
//     if (this.state.user) {
//       clearSession();
//       this.props.history.replace("/signin");
//     }
//   };
//   render() {
//     return (
//       <>
//         {!!localStorage.getItem("token") ? (
//           <div>
//           <NavItem>
//             <NavLink className="navbar-brand" href="#">
//               Logout
//             </NavLink>
//           </NavItem>
//           </div>
//         ) : null}
//       </>
//     );
//   }
// }
const LogoutLink = (props) => {
  const [loggedOut, setLoggedOut] = useState(false)

  const logout = (e) => {
    e.preventDefault();
    clearSession()
    setLoggedOut(true)
  }
  if(loggedOut) {
    return <Redirect to ='signin' push={true} />
  }
  return (
    <div className = "main">
  <Button onClick = {logout}>Logout</Button>
  </div>
  )}

  export default LogoutLink;