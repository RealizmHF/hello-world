
import React from 'react';
import jax from '/Users/james/Desktop/hello-world/src/Images/jax.png';
import '/Users/james/Desktop/hello-world/src/CSS/Header.css';

class Header extends React.Component {

    render(){
        return(
            <div className="Header">
                <header className="Header-header">
                    <img src={jax} className="jax-logo" alt="jax" />
                    <h1 className="Header-title">
                        Glaucoma Discovery Platform
                    </h1>
                    <a
                        className="Header-john"
                        href="http://www.simonjohnlab.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Welcome to the John Lab
                    </a>
                    <p className="Header-desc">
                        Visualize and interrogate gene expression changes in glaucoma <br /> A resource provided by the John Lab
                    </p>
                </header>
            </div>
        );
    }
}

export default Header