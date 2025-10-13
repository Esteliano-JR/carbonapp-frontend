import "./Agendamento.css";

function Agendamento () {
  return (
    <section className="agendamento-container">
      <h2 className="titulo">Agende sua Coleta</h2>
      <p className="subtitulo">
        Nossas empresas parceiras coletam na sua casa gratuitamente
      </p>

      <div className="agendamento-content">
        {/* Formulário */}
        <div className="form-box">
          <h3>📅 Agendar Coleta</h3>
          <form>
            <div className="form-group">
              <label>Nome Completo</label>
              <input type="text" placeholder="Seu nome" />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input type="number" placeholder="(11) 99999-9999" />
            </div>

            <div className="form-group">
              <label>Endereço Completo</label>
              <input type="text" placeholder="Rua, número, bairro, cidade" />
            </div>

            <div className="form-inline">
              <div className="form-group">
                <label>Data Preferida</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Horário Preferido</label>
                <select>
                  <option>Selecione o horário</option>
                  <option>Manhã</option>
                  <option>Tarde</option>
                  <option>Noite</option>
                </select>
              </div>
            </div>

            <div className="form-group materiais">
              <label>Materiais para Coleta</label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> Alumínio</label>
                <label><input type="checkbox" /> Papelão</label>
                <label><input type="checkbox" /> Plástico</label>
                <label><input type="checkbox" /> Óleo</label>
                <label><input type="checkbox" /> Cobre</label>
              </div>
            </div>

            <div className="form-group">
              <label>Observações</label>
              <textarea placeholder="Quantidade estimada, instruções especiais, etc." />
            </div>

            <button type="submit" className="btn-agendar">Agendar Coleta Gratuita</button>
          </form>
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
