
import {React, useState}  from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import './index.css';


const Home = (props) => {

    const [de, setDe]   = useState('2021-01-01');
    const [ate, setAte] = useState('2021-12-01');    
    
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
                    <Button className='button' type = "submit">
                        <Link to={propsTo}><strong>Buscar</strong></Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Home
