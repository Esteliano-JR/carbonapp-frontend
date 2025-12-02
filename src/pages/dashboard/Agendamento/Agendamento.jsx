import "./Agendamento.css";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

function Agendamento() {
   const token = localStorage.getItem("token");

  let usuarioId;
  try {
    const decoded = jwtDecode(token);
    usuarioId = decoded.id;
  } catch (err) {
    console.error("Token inválido:", err);
    return <p>Você precisa estar logado para agendar uma coleta.</p>;
  }

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [materiais, setMateriais] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const handleCheckboxChange = (e) => {
    const id = Number(e.target.value);
    setMateriais((prev) =>
      e.target.checked ? [...prev, id] : prev.filter((m) => m !== id)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      usuarioId: Number(usuarioId),
      nomeCompleto,
      telefone,
      endereco,
      data,
      horario,
      observacoes,
      materiais,
    };
    console.log("Payload enviado:", payload);

    try {
      const response = await fetch("http://localhost:3000/agendamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resultado = await response.json();

      if (response.ok) {
        setMensagem("✅ Agendamento criado com sucesso!");
      } else {
        setMensagem("❌ Erro: " + (resultado.error || resultado.erro));

      }
    } catch (error) {
      console.error("Erro ao agendar:", error);
      setMensagem("❌ Erro ao conectar com o servidor.");
    }
  };

  return (
    <section className="agendamento-container">
      <h2 className="titulo">Agende sua Coleta</h2>
      <p className="subtitulo">
        Nossas empresas parceiras coletam na sua casa gratuitamente
      </p>

      <div className="agendamento-content">
        
        <div className="form-box">
          <h3>📅 Agendar Coleta</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome Completo</label>
              <input
                type="text"
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(11) 99999-9999"
                required
              />
            </div>

            <div className="form-group">
              <label>Endereço Completo</label>
              <input
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                placeholder="Rua, número, bairro, cidade"
                required
              />
            </div>

            <div className="form-inline">
              <div className="form-group">
                <label>Data Preferida</label>
                <input
                  type="date"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Horário Preferido</label>
                <select
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  required
                >
                  <option value="">Selecione o horário</option>
                  <option value="Manhã">Manhã</option>
                  <option value="Tarde">Tarde</option>
                  <option value="Noite">Noite</option>
                </select>
              </div>
            </div>

            <div className="form-group materiais">
              <label>Materiais para Coleta</label>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" value="1" onChange={handleCheckboxChange} /> Alumínio
                </label>
                <label>
                  <input type="checkbox" value="2" onChange={handleCheckboxChange} /> Papelão
                </label>
                <label>
                  <input type="checkbox" value="3" onChange={handleCheckboxChange} /> Plástico
                </label>
                <label>
                  <input type="checkbox" value="4" onChange={handleCheckboxChange} /> Óleo
                </label>
                <label>
                  <input type="checkbox" value="5" onChange={handleCheckboxChange} /> Cobre
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Observações</label>
              <textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                placeholder="Quantidade estimada, instruções especiais, etc."
              />
            </div>

            <button type="submit" className="btn-agendar">
              Agendar Coleta Gratuita
            </button>
          </form>

          {mensagem && <p className="mensagem">{mensagem}</p>}
        </div>
        
        {/* Instruções */}
        <div className="info-box">
          <div className="como-funciona">
            <h3>💡 Como Funciona</h3>
            <ol>
              <li><strong>Agende sua coleta:</strong> Preencha o formulário com seus dados</li>
              <li><strong>Separe os materiais:</strong> Use nossos guias para separar corretamente</li>
              <li><strong>Coleta gratuita:</strong> Nossa equipe vai até sua casa</li>
              <li><strong>Ganhe pontos:</strong> Receba pontos baseados no peso coletado</li>
            </ol>
          </div>

          <div className="areas">
            <h3>📍 Áreas de Atendimento</h3>
            <ul>
              <li>Belém <span className="disponivel">✔ Disponível</span></li>
              <li>Ananindeua <span className="disponivel">✔ Disponível</span></li>
              <li>Castanhal <span className="embreve">⏳ Em breve</span></li>
              <li>Altamira <span className="embreve">⏳ Em breve</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agendamento;
