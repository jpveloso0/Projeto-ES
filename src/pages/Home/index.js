
import {React, useState}  from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import './index.css';
import { db } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Home = (props) => {

    const [de, setDe]   = useState(0);
    const [ate, setAte] = useState(0);
    const caminhoCollection = collection(db, "acidentes_teste");
    async function getAcidentes()  {
        // get acidentes
        const data = await getDocs(caminhoCollection);
        const d = []
        // map pra extrair dados
        console.log('----')
        data.forEach((doc) => {console.log(doc.id, '=>', doc.data()); d.push(doc.data)});
        return d
    };

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
                    <Button className='button' type = "submit" onClick= {() => console.log(getAcidentes())}>
                        <Link to={propsTo}><strong>Buscar</strong></Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Home
