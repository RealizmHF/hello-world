import React from 'react'
import DataSetChoice from './DataSetChoice'
import './CSS/DataSet.css'

class DataSet extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            checked: false
        }

        // this.dataStyle = this.dataStyle.bind(this)
    }

    render(){
        return(
            <div className='DataSet'>
                <div className='1'>
                    <DataSetChoice name="Molecular-ONH" />
                </div>
                <div className='2'>
                    <DataSetChoice name="Molecular-ONH 8.5 & 10.5" />
                </div>
                <div className='3'>
                    <DataSetChoice name="Molecular Retina" />
                </div>
                <div className='4'>
                    <DataSetChoice name="Morphological" />
                </div>
            </div>
        )
    }
}

export default DataSet