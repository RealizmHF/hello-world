import React, { Component } from 'react'
import './CSS/DataSetChoice.css'

class DataSetChoice extends Component {

    constructor(props){
        super(props)

        this.state = {
            checked: false
        }

        // this.checked = this.checked.bind(this)
        this.toggleChecked = this.toggleChecked.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    toggleChecked() {
        this.setState(change => ({
            checked: !this.state.checked 
        }));
    }

    isChecked(check) {
        let temp = check
    
        if (this.state.checked) 
            { temp += '-is-checked' }
        else 
            { temp += '-is-unchecked' }

        return temp;
    }

    render() {
        const check = this.isChecked('checkbox-button')
        
        return (
            <section className={ check } onClick={ this.toggleChecked }>
                <input className="checkbox" type="checkbox" checked={this.state.checked} />
                <label className="label">{ this.props.name }</label>
            </section>
        )
    }
}

export default DataSetChoice