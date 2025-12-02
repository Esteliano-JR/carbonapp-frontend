import React from "react";
import "./Perfil.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
const [impacto, setImpacto] = useState({});
const [historico, setHistorico] = useState([]);

useEffect(() => {
  const token = localStorage.getItem("token");
  const { id } = jwtDecode(token);

  axios.get(`http://localhost:3000/usuarios/${id}`)
    .then(res => setUsuario(res.data))
    .catch(err => console.error("Erro ao buscar perfil:", err));

  axios.get(`http://localhost:3000/pontos/${id}`)
    .then(res => setImpacto(res.data))
    .catch(err => console.error("Erro ao buscar pontos:", err));

  axios.get(`http://localhost:3000/reciclagem/${id}`)
    .then(res => setHistorico(res.data))
    .catch(err => console.error("Erro ao buscar histórico:", err));
}, []);

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
            <h3>{usuario?.name}</h3>
            <p className="email">{usuario?.email}</p>

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
            <p>Total Reciclado: <strong>{impacto?.coletasRealizadas} coletas</strong></p>
            <p>Pontos Totais: <strong>{impacto?.pontos} pts</strong></p>
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
            <p>Você tem <strong>{impacto?.pontos ?? 0} pontos</strong> de {impacto?.meta ?? 1500} Pontos</p>

            <div className="barra">
              <div className="preenchimento"
               style={{
                 width: impacto?.meta
                   ? `${Math.min((impacto.pontos / impacto.meta) * 100, 100)}%`
                   : "0%"
                 }}
              ></div>
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
              {historico.map((item, index) => (
               <li key={index}>
                <span>{item.material}</span>
                <span>{item.data}</span>
                <span className="pts">+{item.pontos} pts</span>
               </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
}
