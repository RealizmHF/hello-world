import React, { Component } from 'react'

class DataSetChoice extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" name={this.props.name} checked={this.props.check} />
                <label for={this.props.name}>{this.props.name}</label>
            </div>
        )
    }
}

export default DataSetChoice