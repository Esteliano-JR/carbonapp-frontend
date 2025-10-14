import {Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/dashboard";
import Usuario from "./pages/Perfil/Usuario";
import Pontos from "./pages/Pontos";
import Agendamento from "./pages/Agendamento";


function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/Cadastro" element={<Cadastro />}/>
            <Route path="/Dashboard" element={<Dashboard />}/>
            <Route path="/Usuario" element={<Usuario />}/>
            <Route path="/Pontos" element={<Pontos />}/>
            <Route path="/Agendamento" element={<Agendamento />}/>

        </Routes>
    )
}

export default MainRoutes;