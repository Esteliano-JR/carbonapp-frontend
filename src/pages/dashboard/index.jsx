import React from "react";
import Header from "../../componentes/Header/Header";
import "./style.css"
import Inicio from "./Inicio/Inicio";
import Guia from "./Guias/Guias";
import Pontos from "./Pontos/Pontos";
import Agendamento from "./Agendamento/Agendamento.jsx";
import Parceiros from "./Parceiros/Parceiros.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";

function Dashboard() {
  return (
    <div className="container-header">
      <Header/>
      <Inicio/>
      <Guia/>
      <Pontos/>
      <Agendamento/>
      <Parceiros/>
      <Footer/>
    </div>

  );
}

export default Dashboard;
