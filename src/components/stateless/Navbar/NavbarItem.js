import React from 'react';
import onClickOutside from "react-onclickoutside";


class NavbarItem extends React.Component {
    state = {
        show : false
    }
    showSubMenuHandler = () => {
        this.setState({
            show : !this.state.show
        });
    }
    handleClickOutside = evt => {
       this.setState({
           show : false
       });
    };
   render(){
       return (
           <li className="nav-item">
               <a href="javascript:void(0)" className="nav-link" onClick={this.showSubMenuHandler} data-toggle="dropdown"><i className={this.props.icon}></i>{this.props.name}</a>
               <div className={`dropdown-menu dropdown-menu-arrow ${this.state.show && this.props.children!=null ? 'show' : null}`}>
                   {this.props.children}
               </div>
           </li>
       );
   }
}

export default onClickOutside(NavbarItem);