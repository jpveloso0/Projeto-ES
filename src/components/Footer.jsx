import React from 'react';
import './Footer.css';

const Footer = (props) => {
    const {desc} = props
    return (
        <footer>
            <p><strong>{desc}</strong></p>
        </footer>
    )
}

export default Footer