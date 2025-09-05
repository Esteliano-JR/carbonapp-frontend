import { FaLeaf, FaReceipt, FaCar, FaTruck } from "react-icons/fa";
import "./Inicio.css"
import Logo from '../../img/lixeiras.jpeg';

function Inicio() {
  return (
    <div id="heroi">

      <div className="dash-logo">
        <div className="dash-contet">
          <h1 className="fr-efeito">Recicle com <span>Inteligência</span> e Ganhe Pontos</h1>
          <div>
              <p className="fr-contet">
                  Aprenda a separar seus resíduos corretamente e transforme lixo em pontos que reduzem suas contas de energia e água. Nossas empresas parceiras coletam na sua casa!
              </p>
          </div>
          <div className="top">
              <p>
                <FaLeaf className="Leaf"/>Sustentável
              </p>
              <p>
                <FaReceipt className="Leaf"/> Recompensas
              </p>
              <p>
                <FaTruck className="Leaf"/>Coleta Grátis
              </p>
          </div>
          <div className="botoes">
            <div >
              <a className="dash-cmc" href="#">Começar agora</a>
            </div>
            <div className="dash-guia">
              <a href="#">Ver Guias</a>
            </div>
          </div>
        </div>
        <div className="div-img">
          <img className="dash-img" src={Logo} alt="" />
        </div>
      </div>
    </div>

  );
}

export default Inicio;
