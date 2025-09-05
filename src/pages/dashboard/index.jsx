import React from "react";
import Header from "../../componentes/Header/Header";


import "./style.css"
import Inicio from "./Inicio/inicio";

function Dashboard() {
  return (
    <div className="container-header">
      <Header/>
      <Inicio/>

      <div className="container-home">
        <h1>Dashboard - Ecopoints</h1>
      </div>
    </div>

  );
}

export default Dashboard;
