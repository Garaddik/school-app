import React, {Component} from 'react';
import './searchbox.css';

class Searcbox extends Component{

    render(){
        return(
            <div>
                <div className="row search-container">
                    <div className="col s12">
                        <div className="inline">
                            <input placeholder="Search school" className="search white-background black-text" type="search"/>
                        </div>
                        <div className="inline arraw-container">
                            <i className="fa fa-arrow-circle-right search-submit color" aria-hidden="true"></i>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Searcbox;