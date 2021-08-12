import React from 'react';
import { isLoggedIn } from '../../Common/Utility';
import { Redirect } from 'react-router-dom';
import NavMenu from '../../Components/Polling/NavMenu';

const AdminLayout = (props) => {
  // const [collapsed, setCollapsed] = useState(true);
  // // const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      {isLoggedIn() ? (
        <div style={{ height: '100vh' }}>
       <NavMenu />
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
