import React, { Component } from 'react';
import backgroundimg from '../../images/home_back.jpg';
import './backgroundimg.css';

class BackgroundImage extends Component{

    render(){
        return(
            <div className="background-container">
                <img className="background-img" src={backgroundimg}/>
            </div>
        );
    }
}

export default BackgroundImage;
