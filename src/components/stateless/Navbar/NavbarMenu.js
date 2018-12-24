import React from 'react';
import Navbar from './Navbar';
import NavbarItem from './NavbarItem';

const NavbarMenu = () => {
    return(
        <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg order-lg-first">
                        <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                            <li className="nav-item">
                                <a href="./index.html" className="nav-link active"><i className="fe fe-home"></i> Home</a>
                            </li>
                            <NavbarItem icon="fe fe-book-open" name="Address">
                                <a href="./cards.html" className="dropdown-item ">Cards design</a>
                                <a href="./charts.html" className="dropdown-item ">Charts</a>
                                <a href="./pricing-cards.html" className="dropdown-item ">Pricing cards</a>
                            </NavbarItem>
                            <NavbarItem icon="fe fe-calendar" name="Holidays"></NavbarItem>
                            <NavbarItem icon="fe fe-file" name="Leaves Management">
                                <a href="./profile.html" className="dropdown-item ">Apply Leave</a>
                                <a href="./login.html" className="dropdown-item ">List of Leaves</a>
                            </NavbarItem>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NavbarMenu;