import React, {Component} from 'react';
import './header.css';

class Header extends Component{
    render(){
        return(
            <div className="header header-color">
                <div className="login-register-options white-text">
                    <a className="white-text" href="#">Login</a>/ <a className="white-text" href="#">Register</a> 
                </div>
            </div>
        ); 
    }
}

export default Header;