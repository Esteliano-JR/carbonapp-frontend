import "./cad.css"
import { FaUser, FaLock, FaLeaf} from "react-icons/fa";
import { useState } from "react";
import Logo from "../img/log.png";


function Login() {
  
  

  return (
    <div className="container">  
      <form>

        <div class="logo">
            <div class="imagem-login">

              <h1><FaLeaf className="Leaf"/> Ecopoints</h1>

              <p>Bem-vindo! Cadastre-se agora e tenha acesso a uma experiência completa. Preencha seus dados para criar sua conta e aproveitar todas as funcionalidades do sistema.</p>

            </div>
        </div>

          <h1>Tela de Cadastro</h1>
          <p>
            faça cadastro para começar a sua eco-jornada
          </p>

          <div className="nome-cad">
            <input  type="text" placeholder="Primeiro nome"/>

            <div className="ult">
              <input   type="text" placeholder="Último nome"/>
            </div>
          </div>
            <input type="text" placeholder="CPF" />
          <div>

          </div>
          
          <div>

            <input type="email" placeholder="E-mail" />
            <FaUser className="icon"/>
            
          </div>
          <div>

            <input type="password" placeholder="Senha" />
            <FaLock className="icon"/>

          </div>

          <div>
            <input type="text" placeholder="Rua"/>
          </div>

          <div>
            <input type="text" placeholder="Complemento"/>
          </div>

          <div className="cid-cad">
            <input type="text" placeholder="Cidade"/>

            <div className="est-cad">
              <input type="text" placeholder="Estado"/>
            </div>
          </div>

          <div>
            <input className="cep-cad" type="number" placeholder="CEP"/>
          </div>

          <div>

            <p className="termos-cad">
              Ao preencher o formulário acima você 
              concorda com os nossos <a href="#">Termos de uso</a> e 
              nossa <a href="#">Política de Privacidade</a>.
            </p>


          </div>

          <button>Cadastrar</button>

        
      </form>
      
    </div>
  

  );
}
export default Login;
