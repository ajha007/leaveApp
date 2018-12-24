import React from 'react';
import Aux from '../../../hoc/Auxi';
import Navbar from '../Navbar/Navbar';

class Layout extends React.Component {

    logoutHandler = () => {
        sessionStorage.removeItem('isLoggedIn');
        window.location.reload();
    }

   render(){
        return (
            <Aux>
                <Navbar logout={this.logoutHandler} />
                <p>Sidebar</p>
                <p>Dashboard</p>
                <p>Footer</p>
            </Aux>
        );
   }
}

export default Layout;