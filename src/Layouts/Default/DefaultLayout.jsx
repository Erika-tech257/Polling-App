import React, { useState } from 'react';
import TopNavBar from './TopNavBar';
import Footer from '../../Components/Footer';
import { isLoggedIn } from '../../Common/Utility';
import { Redirect } from 'react-router-dom';

const DefaultLayout = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      {isLoggedIn() ? (
        <>
          <TopNavBar collapsed={collapsed} toggleNavbar={toggleNavbar} />
          {props.children}
          <Footer />
        </>
      ) : (
        <>
          <Redirect to="/signin" />
        </>
      )}
    </>
  );
};

export default DefaultLayout;
