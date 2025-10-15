import Footer from "../../componentes/Footer/Footer";
import Perfil from "./Perfil";
import "./Usuario.css"


function Usuario() {
  return ( 
    < div className="Usuario-back">
        <Perfil/>
        <Footer/>
    </div>
  );
}

export default Usuario;