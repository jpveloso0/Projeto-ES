import './index.css';

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes'

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return ( 
        <BrowserRouter className = "App" >
            <Header titulo = { "Recife STATS" }/> 
            <Routes/>
            <Footer desc = { 'Página desenvolvida utilizando ReactJs & NodeJS' }/>
        </BrowserRouter>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render( <App/> , rootElement)