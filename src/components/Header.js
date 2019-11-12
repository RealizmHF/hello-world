
import React from 'react';
import sciencelab from '/Users/james/Desktop/hello-world/src/Images/scienceLab.jpg';
import jax from '/Users/james/Desktop/hello-world/src/Images/jax.png';
import '/Users/james/Desktop/hello-world/src/CSS/Header.css';
import HeaderLinks from './HeaderLinks';

class Header extends React.Component {

    render(){
        return(
            <div className="Header">
                <header className="Header-header">
                    <img src={jax} className="Header-logo" alt="jax" />
                    <div className="Header-title">
                        <img src={sciencelab} className="Header-title-image" alt="title" />
                        <h1 className="Header-title-text">
                           Glaucoma Discovery Platform
                        </h1>
                    </div>
                </header>
                <div className="Header-link-line">
                    <HeaderLinks />
                </div>
            </div>
        );
    }
}

export default Header