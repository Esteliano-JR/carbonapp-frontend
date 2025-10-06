import "../Pontos/Pontos.css"
import { FaBolt } from "react-icons/fa";

function Pontos () {
    return (
        <main id="Backpontos">
            <div className="Cabecapontos">
                <h1>Seus Pontos EcoPoints</h1>
                <p>Troque seus pontos por benefícios reais nas suas contas</p>
                <div className="Pontos">
                    <div className="Divpontos">
                        <div className="Textopontos">
                            
                                <div>
                                    <p style={{fontSize:"19px"}}>
                                        Seus Pontos Atuais <br />
                                    </p>
                                    <p className="Tpontos">
                                        Continue reciclando para ganhar mais!
                                    </p>
                                </div>
                        
                                <div>
                                    <p>
                                        "1.250"
                                    </p>
                                    <p className="Tpontos">
                                        pontos
                                    </p>
                                </div>
                            
                        </div>
                        <div>
                            <div>
                                <p className="Tpontos">
                                    Processo para próxima recompensa
                                </p>
                                <p className="Tpontos">
                                    "1250/1500"
                                </p>
                            </div>
                            <div>
                                <input className="Quantpontos" type="range" />
                                
                                <p className="Tpontos">Falta "250" pontos para o próximo nível</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Basedescont">
                    <div className="Desconto">
                        <div className="Indesconto">
                            <div className="Icondescont"><FaBolt/> </div>
                            
                            <p>
                                Desconto na Energia
                                <span>1000 pontos</span>
                            </p>

                        </div>

                    </div>

                    <div>

                    </div>

                    <div>

                    </div>
                </div>

            </div>
        </main>
    );
}
export default Pontos;