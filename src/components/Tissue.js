import React, { Component } from 'react'
import './CSS/Tissue.css'

class Tissue extends Component {
    render() {
        return (
            <div>
{/*                 Style the select to look like buttons that highlight and unhighlight
                    Make the checkboxes this as well
                    Can we add margins and padding to individual options?
                    Can I remove the outlined box?
                 */}
                <select className="Tissue-select" multiple="multiple" size="2">
                    <option className="Tissue-option" value="ONH" selected="selected">ONH</option>
                    <option className="Tissue-option" value="Retina">Retina</option>
                </select>
            </div>
        )
    }
}

export default Tissue