import React from 'react'
import DataSetChoice from './DataSetChoice'
import './CSS/DataSet.css'

class DataSet extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            checked: false
        }
    }

    render(){
        return(
            <div className='DataSet'>
                <div className='MONH'>
                    <DataSetChoice name="Molecular-ONH" />
                </div>
                <div className='MONH-Two'>
                    <DataSetChoice name="Molecular-ONH 8.5 & 10.5" />
                </div>
                <div className='MORetina'>
                    <DataSetChoice name="Molecular Retina" />
                </div>
                <div className='MORPH'>
                    <DataSetChoice name="Morphological" />
                </div>
            </div>
        )
    }
}

export default DataSet