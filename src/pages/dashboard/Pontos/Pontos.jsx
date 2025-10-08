import "../Pontos/Pontos.css"
import { FaBolt, FaTint, FaGift} from "react-icons/fa";

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

                {/* Energia */}

                <div className="Basedescont">
                    <div className="Desconto">
                        <div className="Indesconto">
                            <div>
                                <div style={{color:"yellow"}} className="Icondescont">
                                    <FaBolt/>
                                </div>
                                
                                <p className="Valordescont">
                                    Desconto na Energia
                                    <span> 1000 pontos</span>
                                </p>
                            </div>

                            <p>
                                Reduz a conta de luz em até 15%
                            </p>

                            <input type="button" value="Resgate" />

                        </div>
                    </div>

                    {/* Água */}

                    <div className="Desconto">
                        <div className="Indesconto">
                            <div>
                                <div style={{color:"#2563EB"}} className="Icondescont">
                                    <FaTint/>
                                </div>
                                
                                <p className="Valordescont">
                                    Desconto na Água
                                    <span> 800 pontos</span>
                                </p>
                            </div>

                            <p>
                                Economize na conta de água até 10%
                            </p>

                            <input type="button" value="Resgate" />

                        </div>
                    </div>

                    {/* Vale compras */}

                    <div className="Desconto">
                        <div className="Indesconto">
                            <div>
                                <div className="Icondescont">
                                    <FaGift/>
                                </div>
                                
                                <p className="Valordescont">
                                    Vale compras
                                    <span> 1500 pontos</span>
                                </p>
                            </div>

                            <p>
                                vale de R$ 50 em supermercados parceiros
                            </p>

                            <input type="button" value="Resgate" />

                        </div>
                    </div>
                    
                    <div className="Impacto">
                        <div className="Ininpacto">
                            <h2>Seu impacto ambiental</h2>

                            <div>
                                <div>
                                    <p className="Impactonum" style={{color:"#16A34A"}}>
                                        "15.2kg"
                                    </p>
                                    <p className="Impactoitens">
                                        Material Reciclado
                                    </p>
                                </div>

                                <div>
                                    <p className="Impactonum" style={{color:"#2563EB"}}>
                                        "8.5L"
                                    </p>
                                     <p className="Impactoitens">
                                        Óleo Coletado
                                    </p>
                                </div>

                                <div>
                                    <p className="Impactonum" style={{color:"purple"}}>
                                        "12"
                                    </p>
                                     <p className="Impactoitens">
                                        Coletas realizadas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
export default Pontos;