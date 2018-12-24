import React from 'react';
import onClickOutside from "react-onclickoutside";

import avatar from '../../../../assets/images/faces/male/41.jpg';
import '../../../../assets/css/styles.css';
import Auxi from '../../../../hoc/Auxi';



class Dropdown extends React.Component {
    state = {
        show : false
    }
    showDropDownHandler = () => {
        this.setState({
            show : !this.state.show
        });
    }
    handleClickOutside = evt => {
        this.setState({
            show: false
        });
    };
    render(){
        let ddownA = (<Auxi>
            <span className="avatar" style={{ backgroundImage: `url(${avatar})` }}></span>
            <span className="ml-2 d-none d-lg-block">
                <span className="text-default">Jane Pearson</span>
                <small className="text-muted d-block mt-1">Administrator</small>
            </span>
        </Auxi>);
        if(this.props.type == "notification"){
            ddownA = (<Auxi>
                <i className="fe fe-bell"></i>
                <span className="nav-unread"></span>
            </Auxi>);
        }
        return (
            <div className={`dropdown ${this.props.type == "notification" ? 'd-none d-md-flex' : null}`}>
                <a href="#" className="nav-link pr-0 leading-none" data-toggle="dropdown" onClick={this.showDropDownHandler}>
                    {ddownA}
                </a>
                <div className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow ${this.state.show ? 'show' : null}`}>
                   {this.props.children}
                </div>
            </div>

        );
    }
}

export default onClickOutside(Dropdown);