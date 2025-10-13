import "./Header.css"
import React from "react";
import { FaLeaf, FaUser } from "react-icons/fa";




function Header() {
  return (
    <header>
        
        <div className="Header-conteudo">
            <div className="Header-logo">
                <h2><FaLeaf className="recicla"/>EcoPoints</h2>
            </div>

            <div className="Header-nav">
                <nav><a href="#heroi">Inicio</a></nav>
                <nav><a href="#back-guia">Guias</a></nav>
                <nav><a href="#Pontos">Pontos</a></nav>
                <nav><a href="#Agendar">Agendar</a></nav>
                <nav><a href="#Parceiros">Parceiros</a></nav>
            </div>

            <div className="Header-pontos">
                <div>Pontos: "1,250"</div>
                <FaUser/>
            </div>
        </div>
    </header>
);
}

export default Header;
