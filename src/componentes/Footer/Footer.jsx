import React from "react";
import { FaRecycle, FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <div className="footer-logo">
            <FaRecycle className="footer-icon" />
            <h3>EcoPoints</h3>
          </div>
          <p>
            Transformamos reciclagem em recompensas reais.  
            Junte-se a nós na construção de um futuro mais sustentável.
          </p>
          <div className="footer-social">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/guia">Guia de Reciclagem</a></li>
            <li><a href="/pontos">Sistema de Pontos</a></li>
            <li><a href="/agendar">Agendar Coleta</a></li>
            <li><a href="/parceiros">Parceiros</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Materiais Aceitos</h4>
          <ul>
            <li>♻️ Alumínio (50 pts/kg)</li>
            <li>🧴 Plástico (30 pts/kg)</li>
            <li>📦 Papelão (25 pts/kg)</li>
            <li>🔩 Cobre (200 pts/kg)</li>
            <li>🛢️ Óleo de Cozinha (40 pts/kg)</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <ul>
            <li><FaPhone /> (11) 99999-9999</li>
            <li><FaEnvelope /> contato@ecopoints.com</li>
            <li><FaMapMarkerAlt /> Belém - Pa</li>
            <li>Atendemos toda a Grande Belém</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 EcoPoints. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/termos">Termos de Uso</a>
          <a href="/faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
