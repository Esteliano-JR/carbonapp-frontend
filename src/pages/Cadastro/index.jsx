import "./cad.css";
import { FaUser, FaLock, FaLeaf } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/cad.jpg";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const navigate = useNavigate();

  async function handleCadastro(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/auth/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${nome} ${sobrenome}`, // 👈 Correção aqui
        cpf,
        email,
        password: senha,
        rua,
        complemento,
        cidade,
        estado,
        cep
      })
    });

    const data = await res.json();
    if (res.ok) {
      alert("Cadastro realizado com sucesso!");
      navigate("/Home");
    } else {
      alert(data.error || "Erro ao cadastrar");
    }
  }

  return (
<main className="conteudo">
  <div  className="lado-imagem">
    <img src={Logo} alt="imagem de reciclagem" />
  </div>
  
  <div className="container">
    <form onSubmit={handleCadastro}>
      <div className="bem-vindo">
        <div>
          <h1><FaLeaf className="Leaf" /> Ecopoints</h1>
          <p>
            Bem-vindo! Cadastre-se agora e tenha acesso a uma experiência completa.
            Preencha seus dados para criar sua conta e aproveitar todas as funcionalidades do sistema.
          </p>
        </div>
      </div>

      <h1>Tela de Cadastro</h1>
      <p>
        faça cadastro para começar a sua eco-jornada
      </p>

      <div className="nome-cad">
        <input type="text" placeholder="Primeiro nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <div className="ult">
          <input type="text" placeholder="Último nome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
        </div>
      </div>

      <div >
      <input className="cpf-cad" type="text" placeholder="CPF" maxLength={14} value={cpf} onChange={(e) => setCpf(e.target.value)} />
      </div>

      <div>
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FaUser className="icon" />
      </div>

      <div>
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <FaLock className="icon" />
      </div>

      <div>
        <input type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
      </div>

      <div className="cid-cad">

        <input type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />

        <div className="est-cad">
          <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} />

        </div>
      </div>

      <input className="cep-cad" type="number" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />

      <div>
        <p className="termos-cad">
          Ao preencher o formulário acima você concorda com os nossos <a href="#">Termos de uso</a> e nossa <a href="#">Política de Privacidade</a>.
        </p>
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</main>
  );
}

export default Cadastro;