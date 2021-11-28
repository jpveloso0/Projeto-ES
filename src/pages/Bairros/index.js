import './index.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {useParams} from 'react-router-dom';
import ListBairros from '../../components/ListBairros';
import BairroDetail from '../../components/BairroDetail';

const Bairros = (props) => {
    const {de} = useParams()
    const {ate} = useParams()
    const {bairro} = useParams()
    return (
        <div className = "App">
            <h2 className='titulo text-center'><strong>RANKING DE ACIDENTES POR BAIRROS</strong></h2>
            <div className = 'row'>
                <div className = 'col-lg-5' onClick={() => console.log(de, bairro, ate)}>
                    <ListBairros/>
                </div>
                <div className = 'col-lg-7'>
                    <BairroDetail/>
                </div>
            </div>
        </div>
    )
}

export default Bairros