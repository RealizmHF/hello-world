import React from 'react'
import '/Users/james/Desktop/hello-world/src/CSS/Links.css'
import HeaderLink from './HeaderLink'
import JohnLink from './JohnLink';

class HeaderLinks extends React.Component{
    render(){
        return(
            <div className="HeaderLinks">
                <JohnLink />
                <HeaderLink name="Download" />
                <HeaderLink name="Quick Guide" />
                <HeaderLink name="Datgan" />
            </div>
        );
    }
}

export default HeaderLinks