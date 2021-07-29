import React, { useState } from 'react';
import Body from './Body';
import PageContent from './PageContent';
import SideBar from './SideBar';
import TopNav from '../TopNav';
import { isLoggedIn } from '../../Common/Utility';
import { Redirect } from 'react-router-dom';

const AdminLayout = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      {isLoggedIn() ? (
        <div style={{ height: '100vh' }}>
          <TopNav collapsed={collapsed} toggleNavbar={toggleNavbar}></TopNav>
          <Body>
            <SideBar collapsed={collapsed} />
            <PageContent>{props.children}</PageContent>
          </Body>
        </div>
      ) : (
        <>
          <Redirect to="/signin" />
        </>
      )}
    </>
  );
};

export default AdminLayout;
