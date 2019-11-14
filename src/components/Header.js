
import React from 'react' 
import sciencelab from './Images/scienceLab.jpg'
import jax from './Images/jax.png'
import './CSS/Header.css' 
import { Link } from 'react-router-dom' 

class Header extends React.Component {

    render(){
        return(
            <div className="Header">
                <div className="Header-header">
                    <img src={jax} className="Header-logo" alt="jax" />
                    <div className="Header-link-line">
                        <a
                            href="http://www.simonjohnlab.org/"
                            rel="noopener noreferrer"
                            type="button"
                        >
                            <button className="Header-button">
                                Welcome to the John Lab
                            </button>
                        </a>
                        <Link className='Header-button' to="/">New Search</Link>
                        <Link className='Header-button' to="/download">Download</Link>
                        <Link className='Header-button' to="/quick-guide">Quick Guide</Link>
                        <Link className='Header-button' to="/contact-us">Contact Us</Link>
                    </div>
                    <div className="Header-title">
                        <img src={sciencelab} className="Header-title-image" alt="title" />
                        <h1 className="Header-title-text">
                           Glaucoma Discovery Platform
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header