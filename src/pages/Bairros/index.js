import './index.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import ListBairros from '../../components/ListBairros';
import BairroDetail from '../../components/BairroDetail';

import { db } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Bairros = (props) => {
    const {de} = useParams()
    const {ate} = useParams()
    // useState para alterar os dados após o request
    const [acidentes, setAcidentes] = useState();
    const [bairroAtual, setBairroAtual] = useState(null);

    const caminhoCollection = collection(db, "acidentes_teste");

    async function getAcidentes()  {
        // get acidentes
        const data = await getDocs(caminhoCollection);
        var d = []
        data.forEach((doc) => {
            //doc.id
            d.push(doc.data())
        });
        // após o request, é setado o d no state acidentes.
        setAcidentes(d);
    };


    // useEffect para chamar a função quando o componente for montado
    useEffect(() => {
        getAcidentes();
    }, [])


    const selectedData = (selectedBairro) => {
        setBairroAtual(selectedBairro);
    }


    return (
        <div className = "App">
            <h2 className='titulo text-center'><strong>RANKING DE ACIDENTES POR BAIRROS</strong></h2>
            <div className = 'row'>
                <div className = 'col-lg-5'>
                    <ListBairros de={de} ate={ate} data={acidentes} selectedData={selectedData} />
                </div>
                <div className = 'col-lg-7'>
                    {bairroAtual && bairroAtual.bairro}
                    {bairroAtual && bairroAtual.qtd}
                    <BairroDetail bairroAtual={bairroAtual} />
                </div>
            </div>
        </div>
    )
}
 
export default Bairros