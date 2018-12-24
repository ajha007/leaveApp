import React from 'react';
import Aux from '../../../hoc/Auxi';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';

class Layout extends React.Component {

    logoutHandler = () => {
        sessionStorage.removeItem('isLoggedIn');
        window.location.reload();
    }

   render(){
        return (
            <Aux>
                <Navbar logout={this.logoutHandler} />
                <Dashboard />
                <p>Footer</p>
                <h1>Fetch Upstream check</h1>
                <h1>Fetch Upstream check again</h1>
            </Aux>
        );
   }
}

export default Layout;