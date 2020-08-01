import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/BSFLIX.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
      <img className="Logo" src={Logo} alt="BSFLIX"></img>
      </a>
      <p>
        Project created during the React Imersion Week from 
        {' '}
        <a href="https://www.alura.com.br/">
          Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
