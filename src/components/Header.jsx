import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const {titulo} = props
    const gitImage = process.env.PUBLIC_URL + '/img/github-logo.png'
    const homeImage = process.env.PUBLIC_URL + '/img/home.png'
    const logoImage = process.env.PUBLIC_URL + '/img/logo.png'
    return (
        <header className = 'Header'>
            <div className = 'imagotipo'>
                <img className = 'logo' src={logoImage} alt="logo" />
                <h3>{titulo}</h3>
            </div>
            <nav className='navUrl'>
                <Link to='/' className = 'urls'>
                    <img src={homeImage} alt="GitHub" width="23" height="23"/>
                </Link>
                <a href="https://github.com/jpveloso0/Projeto-ES" target="_blank" rel="noopener noreferrer" className = 'urls'>
                    <img src={gitImage} alt="GitHub" width="25" height="25"/>
                </a>
            </nav>
        </header>
    )
}

export default Header