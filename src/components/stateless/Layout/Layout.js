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
                <Navbar logout={this.logoutHandler} profileLayout={this.props.profileApp}/>
                {console.log(this.props.profileApp)}
                <Dashboard />
                <p>Footer</p>
            </Aux>
        );
   }
}

export default Layout;
