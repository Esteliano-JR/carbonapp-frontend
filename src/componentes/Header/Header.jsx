import "./Header.css"
import React from "react";
import { FaLeaf, FaRecycle } from "react-icons/fa";


function Header() {
  return (
    <header>
        
        <div>
            <h2><FaLeaf className="recicla"/>EcoPoints</h2>
            <a href="#Incio">Inicio</a>
            <a href="#Guias">Guias</a>
            <a href="#Pontos">Pontos</a>
            <a href="#Agendar">Agendar</a>
            <a href="#Parceiros">Parceiros</a>
        </div>
    </header>
);
}

export default Header;
