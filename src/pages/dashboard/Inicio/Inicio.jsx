import { FaLeaf, FaReceipt, FaTruck } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Inicio.css"
import Logo from '../../img/lixeiras.jpeg';

function Inicio() {
  return (
    <main id="heroi">

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
                <FaLeaf className="Leaf"
                data-tooltip-id="tooltip"
                data-tooltip-content="Práticas que ajudam o meio ambiente"/>Sustentável
              </p>
              <p>
                <FaReceipt className="Leaf"
                data-tooltip-id="tooltip"
                data-tooltip-content="Ganhe pontos e descontos nas contas"/> Recompensas
              </p>
              <p>
                <FaTruck className="Leaf"
                data-tooltip-id="tooltip"
                data-tooltip-content="Nossos parceiros recolhem em sua casa"/>Coleta Grátis
              </p>
          </div>
          <div className="botoes">
            <div >
              <a className="dash-cmc" href="#">Começar agora</a>
            </div>
            <div className="dash-guia">
              <a href="#back-guia">Ver Guias</a>
            </div>
          </div>
        </div>
        <div className="div-img">
          <img className="dash-img" src={Logo} alt="" />
        </div>
      </div>
      {/* Tooltip global */}
      <Tooltip id="tooltip" place="top" effect="solid" />
    </main>

  );
}

export default Inicio;
