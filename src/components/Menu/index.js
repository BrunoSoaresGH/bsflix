import React from 'react';
import Logo from '../../assets/img/BSFLIX.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="BSFLIX"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/register/video">New Video</Button>
        </nav>    
    );
}

export default Menu;