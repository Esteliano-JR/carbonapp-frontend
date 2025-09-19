import "./Header.css"
import React from "react";
import { FaLeaf, FaRecycle } from "react-icons/fa";
import Inicio from "../../pages/dashboard/Inicio/Inicio";
import Guia from "../../pages/dashboard/Guias/Guias"



function Header() {
  return (
    <header>
        
        <div>
            <h2><FaLeaf className="recicla"/>EcoPoints</h2>
            <nav><a href="#heroi">Inicio</a></nav>
            <nav><a href="#back-guia">Guias</a></nav>
            <nav><a href="#Pontos">Pontos</a></nav>
            <nav><a href="#Agendar">Agendar</a></nav>
            <nav><a href="#Parceiros">Parceiros</a></nav>
        </div>
    </header>
);
}

export default Header;
