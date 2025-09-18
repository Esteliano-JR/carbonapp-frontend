import React from "react";
import Header from "../../componentes/Header/Header";
import "./style.css"
import Inicio from "./Inicio/inicio";
import Guia from "./Guias/Guias";
import { BiColor } from "react-icons/bi";

function Dashboard() {
  return (
    <div className="container-header">
      <Header/>
      <Inicio/>
      <Guia/>

      <div className="container-home">
        <h1>Dashboard - Ecopoints</h1>
      </div>
    </div>

  );
}

export default Dashboard;
