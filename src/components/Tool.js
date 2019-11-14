import React from 'react'
import DataSet from './DataSet'
import Tissue from './Tissue'
import './CSS/Tool.css'


class Tool extends React.Component{

    render(){
        return(
            <div className="Tool-header">
                <div className="Tool-data">
                    <DataSet className="Tool-data-set" />
                </div>
                <div className="Tool-tissue">
                    <Tissue className="Tool-tissue-set" />
                </div>
            </div>
        );
    }
}

export default Tool