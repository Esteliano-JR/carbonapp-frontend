import React from "react";
import Header from "../../componentes/Header/Header";
import "./style.css"
import Inicio from "./Inicio/Inicio";
import Guia from "./Guias/Guias";
import Pontos from "./Pontos/Pontos";
import Agendamento from "./Agendamento/Agendamento.jsx";
import Parceiros from "./Parceiros/Parceiros.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


function Dashboard() {
  const [pontos, setPontos] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const { id } = jwtDecode(token);

    axios.get(`http://localhost:3000/pontos/${id}`)
      .then(res => setPontos(res.data.pontos))
      .catch(err => console.error("Erro ao buscar pontos:", err));
  }, []);

  return (

    <div className="container-header">
      <Header pontos={pontos} />
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
