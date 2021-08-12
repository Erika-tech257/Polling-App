import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./NavMenu.css";
// import { Link } from "react-router-dom";
// import {
//   FaPoll,
//   FaUserCircle,
//   FaHome,
//   FaSignOutAlt,
//   FaBars,
// } from "react-icons/fa";
import LogOut from "../User/LogOut";

const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="#">ShiTech</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="navbar-brand" href="/userProfilePage/:firstName">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-brand" href="#">
                Polls
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-brand" href="#">
                Account
              </NavLink>
            </NavItem>
            <NavItem>
              {/* <LogOut /> */}
              <NavLink className="navbar-brand" href="#">
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavMenu;
