
import {React, useState}  from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import './index.css';


const Home = (props) => {

    const [de, setDe]   = useState('2021-01-01');
    const [ate, setAte] = useState('2021-12-01');    

    const validaData = () => {
        const min = Date.parse('2019-01-01')
        const max = Date.parse('2021-12-31')
        const de_date = Date.parse(de)
        const ate_date = Date.parse(ate)
        const invalidate = [Date.parse('2019-02-30'), Date.parse('2019-02-31'), Date.parse('2020-02-30'), Date.parse('2020-02-31'), Date.parse('2021-02-30'), Date.parse('2021-02-31')]
        //verificar se data 'de' é maior que data 'até'
        if (ate_date < de_date){
            return false
        }
        //verificar se data está entre 2019 e 2021
        else if(!(de_date >= min) || !(de_date <= max)){
            return false
        }
        else if(!(ate_date >= min) || !(ate_date <= max)){
            return false
        }
        else if(invalidate.includes(de_date) || invalidate.includes(ate_date)){return false}
        return true
    }
    
    const logoImage = process.env.PUBLIC_URL + '/img/logoblue.png'
    const propsTo = {
        pathname: `/bairros/${de}&${ate}`,
    }
    return (
        <section className = 'container-fluid mainNav'>
            <img className = 'logo_home' src={logoImage} alt="logo" />
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
                        {validaData() ? (<Link to={propsTo}><strong>Buscar</strong></Link>) : (<strong>Data inválida</strong>)}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Home
