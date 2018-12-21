import React from 'react';
import Aux from '../../../hoc/Auxi';
import Navbar from '../Navbar/Navbar';

const Layout = props => {
    return (
        <Aux>
            <Navbar />
            <p>Sidebar</p>
            <p>Dashboard</p>
            <p>Footer</p>
        </Aux>
    );
}

export default Layout;