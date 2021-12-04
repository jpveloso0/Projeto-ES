
import {React, useState}  from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import './index.css';
import { db } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Home = (props) => {

    const [de, setDe]   = useState('2021-01-01');
    const [ate, setAte] = useState('2021-12-01');
    const caminhoCollection = collection(db, "acidentes_teste");
    
    async function getAcidentes()  {
        // get acidentes
        const data = await getDocs(caminhoCollection);
        var d = []
        // map pra extrair dados
        data.forEach((doc) => {
            //doc.id
            d.push(doc.data())
        });
        return d
    };

    async function sumAcidentes() {
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

    //const data = getAcidentes();
    const totalAcd = sumAcidentes();
    const propsTo = {
        pathname: `/bairros/${de}&${ate}`,
    }
    return (
        <section className = 'container-fluid mainNav'>
            <div className='inputs'>
                <div>
                    <label htmlFor="de"><strong>De</strong></label>
                    <input className='date' type = "date" id = "de" name="de" value = {de} onChange={(e) => setDe(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="ate"><strong>Até</strong></label>
                    <input className='date' type = "date" id = "ate" name="ate" value = {ate} onChange={(e) => setAte(e.target.value)} required/>
                </div>
                <div>
                    <Button className='button' type = "submit" onClick= {() => console.log(totalAcd)}>
                        <Link to={propsTo}><strong>Buscar</strong></Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Home
