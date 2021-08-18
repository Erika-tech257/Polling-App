import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../Common/Utility';
import NavMenu from '../../Components/Polling/NavMenu';



const GuestLayout = (props) => {
  return (
    <>
     <NavMenu />
      {isLoggedIn() ? (
        <Redirect to="/signout" />
      ) : (
        <>
          {props.children}
        </>
      )}
    </>
  );
};

export default GuestLayout;
