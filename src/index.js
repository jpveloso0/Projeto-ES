// import { db } from "./services/firebase";
// import {
//     collection,
//     getDocs,
//     addDoc,
//     updateDoc,
//     deleteDoc,
//     doc,
// } from "firebase/firestore";

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
            <Header titulo = { "Acidentes de Trânsito Recife/PE" }/> 
            <Routes/>
            <Footer desc = { 'Página desenvolvida utilizando ReactJs & NodeJS' }/>
        </BrowserRouter>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render( <App/> , rootElement)