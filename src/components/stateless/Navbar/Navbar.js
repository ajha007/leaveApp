import React from 'react';
import Aux from '../../../hoc/Auxi';
import '../../../assets/css/styles.css';
import tabler from '../../../assets/images/brand/tabler.svg';
import avatar from '../../../assets/images/faces/male/41.jpg';
import Dropdown from '../UI/Form/Dropdown';
import NavbarMenu from './NavbarMenu';

class Navbar extends React.Component {
    state = {
      show : false
    }
    showNavbarMobileToggleHandler = () => {
      this.setState({
        show : !this.state.show
      });
    }
    render(){
      return(
          <Aux>
              <div className="header py-4">
                  <div className="container">
                      <div className="d-flex">
                          <a className="header-brand" href="./index.html">
                              <img src={tabler} className="header-brand-img" alt="tabler logo" />
                          </a>
                              <div className="d-flex order-lg-2 ml-auto">
                                  <Dropdown type="notification">
                                      <a href="#" className="dropdown-item d-flex">
                                          <span className="avatar mr-3 align-self-center" style={{ backgroundImage: `url(${avatar})` }}></span>
                                          <div>
                                              <strong>Nathan</strong> pushed new commit: Fix page load performance issue.
                                                      <div className="small text-muted">
                                                  10 minutes ago
                                                      </div>
                                          </div>
                                      </a>
                                      <a href="#" className="dropdown-item d-flex">
                                          <span className="avatar mr-3 align-self-center" style={{ backgroundImage: `url(${avatar})` }}></span>
                                          <div>
                                              <strong>Alice</strong> started new task: Tabler UI design.
                                                      <div className="small text-muted">
                                                  1 hour ago
                                                      </div>
                                          </div>
                                      </a>
                                      <a href="#" className="dropdown-item d-flex">
                                          <span className="avatar mr-3 align-self-center" style={{ backgroundImage: `url(${avatar})` }}></span>
                                          <div>
                                              <strong>Rose</strong> deployed new version of NodeJS REST Api V3
                                                      <div className="small text-muted">
                                                  2 hours ago
                                                      </div>
                                          </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item text-center text-muted-dark">Mark all as read</a>
                                  </Dropdown>
                                  <Dropdown  type="user_menu">
                                      <a className="dropdown-item" href="#">
                                          <i className="dropdown-icon fe fe-user"></i> Profile
                                      </a>
                                      <a className="dropdown-item" href="#">
                                          <i className="dropdown-icon fe fe-settings"></i> Settings
                                      </a>

                                      <div className="dropdown-divider"></div>

                                      <a className="dropdown-item" href="#" onClick={this.props.logout}>
                                          <i className="dropdown-icon fe fe-log-out"></i> Sign out
                                      </a>
                                  </Dropdown>
                                  </div>
                                  <a href="#" onClick={this.showNavbarMobileToggleHandler} className="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
                                      <span className="header-toggler-icon"></span>
                                  </a>
                          </div>
                      </div>
                  </div>
                  <NavbarMenu show={this.state.show}/>
              </Aux>
      );
    }
}

export default Navbar;
