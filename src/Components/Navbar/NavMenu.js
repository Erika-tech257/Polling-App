import React, { useState } from "react";
import "./NavMenu.css";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";



const NavMenu = (props) => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {  //similar to toggle
    setSidebar(!sidebar) 
  }

//Line 23 can access all icons at the top level and customize them

  return (
    <div>
    <IconContext.Provider value = {{ color: '#fff' }}>
      <div className ="navbar">
        <Link to = "#" className='menu-bars'>
          <FaIcons.FaBars onClick ={showSidebar} />
        </Link>
      </div>
      <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className = "nav-menu-items" onClick ={showSidebar}>
          <li className = "navbar-toggle">
            <Link to = "#" className = "menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
            </li> 
            {SidebarData.map((item, index) => {
              return (
                <li key = {index} className = {item.cName}>
                  <Link to = {item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  </li>
              )
            })}
        </ul>
      </nav>
      </IconContext.Provider>
      {/* <Navbar color="light" light expand="lg">
        <NavbarBrand href="#">ShiTech</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="navbar-brand" href="/userProfilePage/:name">
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
            <NavItem> */}
              {/* <LogOut /> */}
               {/* <NavLink className="navbar-brand" href="#">
                Logout
              </NavLink> 
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> */}
    </div>
  );
};
export default NavMenu;
