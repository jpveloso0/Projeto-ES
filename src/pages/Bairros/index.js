import './index.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {useParams} from 'react-router-dom';
import ListBairros from '../../components/ListBairros';
import BairroDetail from '../../components/BairroDetail';

import { db } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Bairros = (props) => {
    const {de} = useParams()
    const {ate} = useParams()

    const caminhoCollection = collection(db, "acidentes_teste");

    async function getAcidentes()  {
        // get acidentes
        const data = await getDocs(caminhoCollection);
        var d = []
        data.forEach((doc) => {
            //doc.id
            d.push(doc.data())
        });
        return d
    };

    async function groupbyAcidentes() {
        const data = await getAcidentes();
        var result = []
        data.reduce(function(dic, acd){
            if(!dic[acd.bairro]){
                dic[acd.bairro] = {bairro: acd.bairro, qtd: 0};
                result.push(dic[acd.bairro])
            }
            dic[acd.bairro].qtd += 1;
            return dic
        }, {});
        result.sort(function(a,b) {return a.qtd > b.qtd ? -1 : a.qtd > b.qtd ? 1 : 0});
        return result
     }

    return (
        <div className = "App">
            <h2 className='titulo text-center'><strong>RANKING DE ACIDENTES POR BAIRROS</strong></h2>
            <div className = 'row'>
                <div className = 'col-lg-5'>
                    <ListBairros de={de} ate={ate} data={groupbyAcidentes()}/>
                </div>
                <div className = 'col-lg-7'>
                    <BairroDetail/>
                </div>
            </div>
        </div>
    )
}
 
export default Bairros