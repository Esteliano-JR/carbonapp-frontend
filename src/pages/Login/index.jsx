import "./style.css"
import { FaUser, FaLock, FaLeaf} from "react-icons/fa";
import Logo from "../img/log.png";


function Login() {

  return (
    <div className="container">  
      <form>

        <div class="logo">
            <div class="imagem-login">

              <h1><FaLeaf className="Leaf"/> Ecopoints</h1>

              <p>Bem-vindo de volta à sua jornada rumo a um futuro sustentável. <br/>Cada pequena ação cria uma onda de mudança positiva.</p>

            </div>
        </div>

          <h1>Tela de login</h1>
          <p>
            acesse para continuar na sua eco-jornada
          </p>
          
          <div>

            <input type="email" placeholder="E-mail" />
            <FaUser className="icon"/>
            
          </div>
          <div>

            <input type="password" placeholder="Senha" />
            <FaLock className="icon"/>

          </div>
          
          <div>

            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>

            <a href="#"> Esqueceu a senha?</a>

          </div>

          <button>Entrar</button>

          <div className="link-cad">

            <p>Não tem uma conta? <a href="/Cadastro">Registrar</a></p>

          </div>
        
      </form>
      
    </div>
  

  );
}
export default Login;
