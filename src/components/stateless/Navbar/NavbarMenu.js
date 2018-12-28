import React from 'react';
import NavbarItem from './NavbarItem';
import { NavLink } from 'react-router-dom';

const NavbarMenu = props => {
    return(
        <div className={`header collapse d-lg-flex p-0 ${props.show ? 'show' : ''}`} id="headerMenuCollapse">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg order-lg-first">
                        <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" exact><i className="fe fe-home"></i>Home</NavLink>
                            </li>
                            <NavbarItem icon="fe fe-book-open" name="Address" pageUrl="/address-book"></NavbarItem>
                            <NavbarItem icon="fe fe-calendar" name="Holidays" pageUrl="/holidays"></NavbarItem>
                            <NavbarItem icon="fe fe-file" name="Leaves Management">
                                <NavLink to="/leave-apply" className="dropdown-item ">Apply Leave</NavLink>
                                <a href="#" className="dropdown-item">List of Leaves</a>
                            </NavbarItem>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NavbarMenu;
