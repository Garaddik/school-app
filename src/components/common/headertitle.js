import React, { Component } from 'react';
import './headertitle.css';
import logo from '../../images/logo.png';

class HeaderTitile extends Component{

    render(){
        return(
            <div className="header-title">
                <div className="logo-container inline">
                    <img className="img-logo" src={logo} alt="logo" />
                </div>

                <div className="header-title-options black-text inline">
                    <div className="about inline"><a className="black-text" href="#">About</a></div>
                    <div className="contact inline"><a className="black-text" href="#">Contact</a></div>
                </div>
            </div>
        );
    }
}

export default HeaderTitile;