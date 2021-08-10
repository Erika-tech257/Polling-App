import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../Common/Utility';
import Footer from '../../Components/Footer';
import NavMenu from '../../Components/Polling/NavMenu';
import UserMenu from '../UserMenu';


const GuestLayout = (props) => {
  return (
    <>
     <NavMenu />
      {isLoggedIn() ? (
        <Redirect to="/signout" />
      ) : (
        <>
          {props.children}
          <Footer />
        </>
      )}
    </>
  );
};

export default GuestLayout;
