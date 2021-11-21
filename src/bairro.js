import './bairro.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import ListBairros from './components/ListBairros';
import BairroDetail from './components/BairroDetail';

const App = () => {
    return (
        <div className = "App">
            <Header titulo = {"Acidentes de Trânsito Recife/PE"}/>
            <h2 className='titulo text-center'><strong>RANKING DE ACIDENTES POR BAIRROS</strong></h2>
            <div className = 'row'>
                <div className = 'col-lg-5'>
                    <ListBairros/>
                </div>
                <div className = 'col-lg-7'>
                    <BairroDetail/>
                </div>
            </div>
            <Footer desc = {'Página desenvolvida utilizando ReactJs & NodeJS'}/>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)