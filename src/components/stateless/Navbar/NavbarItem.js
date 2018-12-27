import React from 'react';
import onClickOutside from "react-onclickoutside";
import { NavLink } from 'react-router-dom';


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
    componentDidUpdate(){
      console.log("NavbarItem.js: component did update");
    }
    componentWillUpdate(){
      console.log("NavbarItem.js: component will update");
    }
   render(){
        let pageLink = "#";

        if(this.props.pageUrl)
        {
            pageLink = this.props.pageUrl;
        }

       return (
           <li className="nav-item">
               <NavLink to={pageLink} className="nav-link" onClick={this.showSubMenuHandler} data-toggle="dropdown"><i className={this.props.icon}></i>{this.props.name}</NavLink>
               <div className={`dropdown-menu dropdown-menu-arrow ${this.state.show && this.props.children!=null ? 'show' : null}`}>
                   {this.props.children}
               </div>
           </li>
       );
   }
}
export default onClickOutside(NavbarItem);
