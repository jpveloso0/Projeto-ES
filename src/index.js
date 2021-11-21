import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'

const App = () => {
    return (
        <div className = "App">
            <Header titulo = {"Acidentes de Trânsito Recife/PE"}/>
            <Nav/>
            <Footer desc = {'Página desenvolvida utilizando ReactJs & NodeJS'}/>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)