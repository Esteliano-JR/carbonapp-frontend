import "./style.css";
import { FaUser, FaLock, FaLeaf } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/log.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: senha })
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token); // ou token, se preferir
      navigate("/dashboard");
    } else {
      alert(data.error || "Erro ao fazer login");
    }
  }

  return (
    <main>
      <div className="lado-imagem">
        <img src={Logo} alt="imagem de reciclagem" />
      </div>

      <div className="container">
        <form onSubmit={handleLogin}>
          <div className="logo">
            <div>
              <h1><FaLeaf className="Leaf" /> Ecopoints</h1>
              <p>
                Bem-vindo de volta à sua jornada rumo a um futuro sustentável. <br />
                Cada pequena ação cria uma onda de mudança positiva.
              </p>
            </div>
          </div>
          <h1>Tela de login</h1>
          <p>acesse para continuar na sua eco-jornada</p>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button type="submit">Entrar</button>
            <p className="link-cad">
              Não tem uma conta? <a href="/Cadastro">Registrar</a>
            </p>
        </form>
      </div>
    </main>
  );
}

export default Login;