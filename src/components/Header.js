
import React from 'react';
import jax from '/Users/james/Desktop/hello-world/src/Images/jax.png';
import '/Users/james/Desktop/hello-world/src/CSS/Header.css';
import HeaderLinks from './HeaderLinks';

class Header extends React.Component {

    render(){
        return(
            <div className="Header">
                <header className="Header-header">
                    <img src={jax} className="Header-logo" alt="jax" />
                    <h1 className="Header-title">
                        Glaucoma Discovery Platform
                    </h1>
                    <p className="Header-desc">
                        Visualize and interrogate gene expression changes in glaucoma <br /> A resource provided by the John Lab
                    </p>
                </header>
                <div className="Header-link-line">
                    <HeaderLinks />
                </div>
            </div>
        );
    }
}

export default Header