import React from 'react'
import '/Users/james/Desktop/hello-world/src/CSS/DataSet.css'
import DataSetChoice from './DataSetChoice'

class DataSet extends React.Component{

    render(){
        return(
            <div className="DataSet">
                <DataSetChoice name="Molecular-ONH" check={true} />
                <DataSetChoice name="Molecular-ONH 8.5 & 10.5" check={true} />
                <DataSetChoice name="Molecular-ONH" check={true} />
                <DataSetChoice name="Molecular-ONH" check={true} />
            </div>
        )
    }
}

export default DataSet