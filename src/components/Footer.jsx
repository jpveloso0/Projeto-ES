import React from 'react';
import './Footer.css';

const Footer = (props) => {
    const {desc} = props
    const {subdesc} = props
    return (
        <footer>
            <p><strong>{desc}</strong></p>
            <p>{subdesc}</p>
        </footer>
    )
}

export default Footer