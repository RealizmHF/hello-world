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


//     render() {
//         return (
//             <span onClick={this.handleClick} className="outerspan">
//                 <input type="checkbox" className="checkbox" />
//                 <span className="span"></span>
//                 <label className="checklabel" for="checkbox">{this.props.name}</label>
//             </span>
//         )
//     }
// }
//
toggleChecked() {
    // if (this.state.isAnimating) return false;       //DO THIS RIGHT NOW <<<<----------------------------
    this.setState(change => ({
        checked: !this.state.checked  //,
        // isAnimating: true,
    }));
}

isChecked(check) {
    let temp = check
    
    if (this.state.checked) 
        { temp += ' is-checked' }
    else 
        { temp += ' is-unchecked' }
    
    // if (this.state.isAnimating)
    //     { result += ' do-ping'; }

    return temp;
}
render() {

    const check = this.isChecked('checkbox-btn')
    console.log(check)
    return (
        <section className={ check } onClick={ this.toggleChecked }>
            <input className="checkbox" type="checkbox" checked={this.state.checked} />
            <label className="label">{ this.props.name }</label>
            {/* <div className="ui-btn-ping" onTransitionEnd={this.ping}></div> */}
        </section>
    )
}
}

export default DataSetChoice