import {React, useState, browserHistory}  from 'react';
import { createBrowserHistory } from "history";
import { Button } from 'reactstrap';
import './Nav.css';

const history = createBrowserHistory({
  basename: "/"
})
window.redirect = history.push

const Nav = (props) => {
    const [de, setDe]   = useState(0);
    const [ate, setAte] = useState(0);
    const [bairro, setBairro] = useState(0)
    return (
        <section className = 'container-fluid mainNav'>
            <div className='inputs'>
                <input type = "search" placeholder = 'Bairro' onChange={(e) => setBairro(e.target.value)}/>
                <div>
                    <label for="de"><strong>De</strong></label>
                    <input className='date' type = "date" id = "de" name="de" value = {de} onChange={(e) => setDe(e.target.value)} required/>
                </div>
                <div>
                    <label for="ate"><strong>Até</strong></label>
                    <input className='date' type = "date" id = "ate" name="ate" value = {ate} onChange={(e) => setAte(e.target.value)} required/>
                </div>
                <Button type = "submit" onClick = {() =>  window.redirect("/bairro.js")}>Buscar</Button>
                {/* <Button type = "submit" onClick = {() => console.log(de, ate, bairro)}>Buscar</Button> */}
            </div>
        </section>
    )
}

export default Nav