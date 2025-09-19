import "./Guias.css";
import Aluminio from "../../img/aluminio.jpg";
import Papelao from "../../img/papelao.png";
import Plastico from "../../img/plastico.jpg";
import Cobre from "../../img/cobre.jpg";
import Oleo from "../../img/oleo.jpg"

function Guias() {
    return (
        <main id="back-guia">
            <div className="guia-text">
                <h1 className="guia-h">Guia de Separação</h1>
                <p className="guia-p">Aprenda a separar cada tipo de material corretamente e maximize seus pontos</p>
            </div>
            <div className="div-center">

                {/* Alimínio */}

                <div className="guia">
                    <div className="guia-img-div">
                        <img className="guia-img" src={Aluminio} alt="imagem de latinha de alumínio" />
                    </div>
                    
                        <div className="guia-conteudo">
                            <div><h3>Alumínio</h3></div>
                            <div className="guia-pts">
                                50 pts/kg
                            </div>
                        </div>
                    
                    <div className="guia-conteudo-2">
                        <h3>Como separar:</h3>
                        <ul>
                            <li>Amasse as latinhas para economizar espaço</li>
                            <li>Coloque dentro de um saco plástico resistentel</li>
                            <li>Separe tampinhas e latinhas</li>
                            <li>Mantenha limpo e seco</li>
                        </ul>
                        <h3>Exemplos</h3>
                        <div className="guia-exe">
                            <div>
                                latas de refrigerantes
                            </div>
                            <div>
                                Latas de cerveja
                            </div>
                            <div>
                                Tampinhas
                            </div>
                            <div>
                                Embalagem de cosméticos
                            </div>
                        </div>
                    </div>
                    
                </div>
      
                {/* Alumínio acaba aqui */}

                {/* Plástico */}

                <div className="guia">
                   <div className="guia-img-div">
                        <img className="guia-img" src={Plastico} alt="imagem de plástico" />
                    </div>
                    
                        <div className="guia-conteudo">
                            <div><h3>Plastico</h3></div>
                            <div className="guia-pts">
                                30 pts/kg
                            </div>
                        </div>
                    
                    <div className="guia-conteudo-2">
                        <h3>Como separar:</h3>
                        <ul>
                            <li>Lave as embalagens antes de guardar</li>
                            <li>Retire rótulos quando possível resistentel</li>
                            <li>Separe por tipo de plástico (PET, PEAD, etc.)</li>
                            <li>Amasse garrafas PET para economizar espaço</li>
                        </ul>
                        <h3>Exemplos</h3>
                        <div className="guia-exe">
                            <div>
                                Garrafas PET
                            </div>
                            <div>
                                Embalagens de produtos
                            </div>
                            <div>
                                Sacolas plásticas
                            </div>
                            <div>
                                Potes de margarina
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plástico acaba aqui */}

                {/* Papelão */}

                <div  className="guia">
                    <div className="guia-img-div">
                        <img className="guia-img" src={Papelao} alt="imagem de caixa de papelão" />
                    </div>
                    
                        <div className="guia-conteudo">
                            <div><h3>Papelão</h3></div>
                            <div className="guia-pts">
                                25 pts/kg
                            </div>
                        </div>
                    
                    <div className="guia-conteudo-2">
                        <h3>Como separar:</h3>
                        <ul>
                            <li>Desmonte as caixas para economizar espaço</li>
                            <li>Retire fitas adesivas e grampos</li>
                            <li>Mantenha seco e limpo</li>
                            <li>Separe papelão ondulado do papel comum</li>
                        </ul>
                        <h3>Exemplos</h3>
                        <div className="guia-exe">
                            <div>
                                Caixas de delivery
                            </div>
                            <div>
                                Embalagens de produtos
                            </div>
                            <div>
                                Caixas de mudança
                            </div>
                            <div>
                                Papelão ondulado
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Papelão acaba aqui */}

                {/* Cobre */}

                <div className="guia">
                    <div className="guia-img-div">
                        <img className="guia-img" src={Cobre} alt="imagem de fios de cobre" />
                    </div>
                    
                        <div className="guia-conteudo">
                            <div><h3>Cobre</h3></div>
                            <div className="guia-pts">
                                200 pts/kg
                            </div>
                        </div>
                    
                    <div className="guia-conteudo-2">
                        <h3>Como separar:</h3>
                        <ul>
                            <li>Separe fios de cobre de outros metais</li>
                            <li>Retire isolamento plástico quando possíve</li>
                            <li>Mantenha limpo e sem oxidação</li>
                            <li>Separe por espessura do fio</li>
                        </ul>
                        <h3>Exemplos</h3>
                        <div className="guia-exe">
                            <div>
                                Fios elétricos
                            </div>
                            <div>
                                Tubos de cobre
                            </div>
                            <div>
                                Sucata eletrônica
                            </div>
                            <div>
                                Encanamentos
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cobre acaba aqui */}

                {/* Óleo de cozinha */}

                <div className="guia">
                    <div className="guia-img-div">
                        <img className="guia-img" src={Oleo} alt="imagem de panela com óleo" />
                    </div>
                    
                        <div className="guia-conteudo">
                            <div><h3>Óleo de Cozinha</h3></div>
                            <div className="guia-pts">
                                40 pts/kg
                            </div>
                        </div>
                    
                    <div className="guia-conteudo-2">
                        <h3>Como separar:</h3>
                        <ul>
                            <li>Deixe o óleo esfriar completamente</li>
                            <li>Use garrafa PET limpa e seca</li>
                            <li>Use funil para evitar vazamentos</li>
                            <li>Feche bem a garrafa antes de armazenar</li>
                        </ul>
                        <h3>Exemplos</h3>
                        <div className="guia-exe">
                            <div>
                                Óleo de soja
                            </div>
                            <div>
                                Óleo de milho
                            </div>
                            <div>
                                Óleo usado
                            </div>
                            <div>
                                Gordura vegetal líquida
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
export default Guias;