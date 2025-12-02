import React from "react";
import { FaRecycle, FaCog, FaBolt, FaOilCan, FaTint, FaStore, FaStar, FaLeaf } from "react-icons/fa";
import "./Parceiros.css";

function Parceiros () {
  return (
    <section id="parceiros-container">
      <h2 className="titulo">Nossos Parceiros</h2>
      <p className="subtitulo">
        Trabalhamos com empresas confiáveis para garantir a melhor experiência
      </p>

      <div className="Parceiros-beneficios">
        <div className="beneficio-card">
          <FaRecycle className="beneficio-icon" />
          <h3>Coleta Gratuita</h3>
          <p>Nossas empresas parceiras fazem a coleta na sua casa sem custo adicional</p>
        </div>
        <div className="beneficio-card">
          <FaStar className="beneficio-icon" />
          <h3>Preços Justos</h3>
          <p>Garantimos os melhores preços por quilo de material reciclado</p>
        </div>
        <div className="beneficio-card">
          <FaBolt className="beneficio-icon" />
          <h3>Benefícios Reais</h3>
          <p>Descontos aplicados diretamente nas suas contas de energia e água</p>
        </div>
      </div>

      <div className="empresas">
        <div className="empresa-card">
          <FaRecycle className="empresa-icon green" />
          <h4>EcoLeta Sustentável</h4>
          <p className="categoria">Coleta de Resíduos <FaStar className="estrela" /> 4.8</p>
          <p>Especializada em coleta domiciliar de materiais recicláveis com foco em sustentabilidade.</p>
          <p><strong>Especialidades:</strong> Alumínio, Plástico, Papelão</p>
        </div>

        <div className="empresa-card">
          <FaCog className="empresa-icon blue" />
          <h4>MetalMax Reciclagem</h4>
          <p className="categoria">Metais <FaStar className="estrela" /> 4.9</p>
          <p>Líder em reciclagem de metais com tecnologia avançada.</p>
          <p><strong>Especialidades:</strong> Cobre, Alumínio, Ferro</p>
        </div>

        <div className="empresa-card">
          <FaOilCan className="empresa-icon orange" />
          <h4>OleoVerde</h4>
          <p className="categoria">Óleo de Cozinha <FaStar className="estrela" /> 4.7</p>
          <p>Transforma óleo usado em biodiesel e produtos sustentáveis.</p>
          <p><strong>Especialidades:</strong> Óleo usado, Gordura vegetal</p>
        </div>

        <div className="empresa-card">
          <FaBolt className="empresa-icon yellow" />
          <h4>EletroSul Energia</h4>
          <p className="categoria">Benefícios Energia <FaStar className="estrela" /> 4.6</p>
          <p>Concessionária parceira oferecendo descontos para participantes do programa.</p>
          <p><strong>Especialidades:</strong> Desconto na luz</p>
        </div>

        <div className="empresa-card">
          <FaTint className="empresa-icon lightblue" />
          <h4>AquaClara</h4>
          <p className="categoria">Benefícios Água <FaStar className="estrela" /> 4.5</p>
          <p>Oferece benefícios para clientes eco-conscientes.</p>
          <p><strong>Especialidades:</strong> Desconto na água</p>
        </div>

        <div className="empresa-card">
          <FaStore className="empresa-icon purple" />
          <h4>Mercado Verde</h4>
          <p className="categoria">Varejo <FaStar className="estrela" /> 4.8</p>
          <p>Supermercado sustentável que aceita pontos EcoPoints como desconto.</p>
          <p><strong>Especialidades:</strong> Vale compras</p>
        </div>
      </div>

      <div className="parceria-box">
        <p><strong>Quer ser nosso parceiro?</strong></p>
        <p>Se você tem uma empresa de reciclagem ou serviços relacionados, entre em contato conosco.</p>
        <button className="btn-parceiro">💚 Seja um Parceiro</button>
        <p className="telefone">(11) 99999-9999</p>
      </div>
    </section>
  );
};

export default Parceiros;
