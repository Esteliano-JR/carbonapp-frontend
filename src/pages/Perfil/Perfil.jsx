import React from "react";
import "./Perfil.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEdit, FaSignOutAlt } from "react-icons/fa";

export default function Perfil() {
  return (
    <div className="perfil-container">
      <a href="Dashboard" className="voltar-link">← Voltar para página inicial</a>

      <h2 className="perfil-titulo">Meu Perfil</h2>
      <p className="perfil-subtitulo">
        Gerencie suas informações e acompanhe seu progresso
      </p>

      <div className="perfil-conteudo">
        {/* Coluna da esquerda */}
        <div className="perfil-card">
          <div className="perfil-info">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              alt="Avatar"
              className="perfil-avatar"
            />
            <h3>Maria Silva</h3>
            <p className="email">maria.silva@email.com</p>

            <div className="info-detalhes">
              <p>
                <FaPhoneAlt /> (11) 98765-4321
              </p>
              <p>
                <FaMapMarkerAlt /> Rua das Flores, 123 - São Paulo/SP
              </p>
            </div>
          </div>

          <div className="impacto-box">
            <h4>🌎 Impacto Ambiental</h4>
            <p>Total Reciclado: <strong>47 coletas</strong></p>
            <p>Pontos Totais: <strong>2.850 pts</strong></p>
          </div>

          <div className="botoes">
            <button className="editar"><FaEdit /> Editar Perfil</button>
            <button className="sair"><FaSignOutAlt /> <a href="/">Sair</a></button>
          </div>
        </div>

        {/* Coluna da direita */}
        <div className="perfil-progresso">
          <div className="card-progresso">
            <h4>Total de Pontos</h4>
            <p>Você tem <strong>1.250 pontos</strong> de 1.500 Pontos</p>

            <div className="barra">
              <div className="preenchimento" style={{ width: "57%" }}></div>
            </div>

            <div className="beneficios">
              <h5>🎯 Benefícios por pontos:</h5>
              <ul>
                <li>50$ de vale compras - 1500 pts</li>
                <li>Reduza sua conta de luz em até 15% - 1000 pts</li>
                <li>Economize na conta de água até 10% - 800 pts</li>
              </ul>
            </div>
          </div>

          <div className="card-historico">
            <h4>📦 Histórico de Reciclagem</h4>
            <p>Suas últimas contribuições para o meio ambiente:</p>

            <ul className="historico-lista">
              <li><span>Plástico</span> <span>10/10/2025</span> <span className="pts">+150 pts</span></li>
              <li><span>Alumínio</span> <span>03/10/2025</span> <span className="pts">+200 pts</span></li>
              <li><span>Papelão</span> <span>28/09/2025</span> <span className="pts">+120 pts</span></li>
              <li><span>Vidro</span> <span>20/09/2025</span> <span className="pts">+180 pts</span></li>
              <li><span>Óleo Usado</span> <span>15/09/2025</span> <span className="pts">+250 pts</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
}
