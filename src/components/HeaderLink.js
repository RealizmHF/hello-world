import React, { Component } from 'react'
import '/Users/james/Desktop/hello-world/src/CSS/HeaderLink.css'

class HeaderLink extends Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        
        if(this.name === "Download"){
            return "download"
        }
        else if(this.name === "Quick Guide"){
            return "quick-guide"
        }
        else if(this.name === "Datgan"){
            return "datgan"
        }
    }

    render() {
        return (
            <div>
                <button className="Header-button" onClick = {this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}

export default HeaderLink