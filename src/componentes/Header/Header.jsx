import "./Header.css"
import React from "react";
import { FaLeaf, FaUser } from "react-icons/fa";




function Header({ pontos }) {
  return (
    <header>
        
        <div className="Header-conteudo">
            <div className="Header-logo">
                <h2><FaLeaf className="recicla"/>EcoPoints</h2>
            </div>

            <div className="Header-nav">
                <nav><a href="#heroi">Inicio</a></nav>
                <nav><a href="#back-guia">Guias</a></nav>
                <nav><a href="#Backpontos">Pontos</a></nav>
                <nav><a href="#agendamento-container">Agendar</a></nav>
                <nav><a href="#parceiros-container">Parceiros</a></nav>
            </div>

            <div className="Header-pontos">
                <div>Pontos: <strong>{pontos ?? 0}</strong></div>
                    <a className="Header-usuario" href="/Usuario"><FaUser/></a>
            </div>
        </div>
    </header>
);
}

export default Header;
