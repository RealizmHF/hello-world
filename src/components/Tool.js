import React from 'react'
import DataSet from './DataSet'
import '/Users/james/Desktop/hello-world/src/CSS/Tool.css'


class Tool extends React.Component{

    render(){
        return(
            <div className="Tool-header">
                <DataSet className="Tool-data" />
            </div>
        );
    }
}

export default Tool