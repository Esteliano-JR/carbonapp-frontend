import { useEffect, useState } from "react";
import axios from "axios";
import "../Pontos/Pontos.css";
import { FaBolt, FaTint, FaGift } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

function Pontos() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <p>Você precisa estar logado para visualizar seus pontos.</p>;
  }

  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch (err) {
    return <p>Token inválido. Faça login novamente.</p>;
  }

  const usuarioId = decoded.id;


const [dados, setDados] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/pontos/${usuarioId}`)
      .then(res => setDados(res.data))
      .catch(err => console.error(err));
  }, [usuarioId]);

  if (!dados || !dados.impacto) return <p>Carregando...</p>;


  const { pontos, meta, impacto } = dados;
  const restante = meta - pontos;
  const progresso = Math.min((pontos / meta) * 100, 100);

   function handleResgate(tipo) {
  axios.post("http://localhost:3000/resgatar", {
    usuarioId,
    tipo
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => {
    alert("Resgate realizado com sucesso!");
    // opcional: atualizar pontos após resgate
    setDados(prev => ({ ...prev, pontos: prev.pontos - res.data.custo }));
  })
  .catch(err => {
    alert("Erro ao resgatar benefício");
    console.error(err);
  });
}
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
                                        {pontos}
                                    </p>
                                    <p className="Tpontos">
                                        pontos
                                    </p> 
                                </div>
                            
                        </div>
                        <div  className="Div-quantos">
                            <div className="Div-tpontos">
                                <div>
                                    <p className="Tpontos">
                                        Processo para próxima recompensa
                                    </p>
                                </div>
                                <div className="Tpontos">
                                    {pontos}/{meta} pontos
                                </div>
                            </div>
                            <div >
            
                                <input className="Quantpontos" type="range" value={progresso} readOnly />
                                
                                <p className="Tpontos">Falta {restante} pontos para o próximo nível</p>
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

                            <input type="button" value="Resgate" onClick={() => handleResgate("energia")} />



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

                            <input type="button" value="Resgate" onClick={() => handleResgate("agua")} />

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

                            <input type="button" value="Resgate" onClick={() => handleResgate("vale")} />

                        </div>
                    </div>
                    
                    <div className="Impacto">
                        <div className="Ininpacto">
                            <h2>Seu impacto ambiental</h2>

                            <div>
                                <div>
                                    <div className="Impactonum" style={{color:"#16A34A"}}>
                                        {impacto.materialReciclado}
                                    </div>
                                    <p className="Impactoitens">
                                        Material Reciclado
                                    </p>
                                </div>

                                <div>
                                    <div className="Impactonum" style={{color:"#2563EB"}}>
                                        {impacto.oleoColetado}
                                    </div>
                                     <p className="Impactoitens">
                                        Óleo Coletado
                                    </p>
                                </div>

                                <div>
                                    <div className="Impactonum" style={{color:"purple"}}>
                                        {impacto.coletasRealizadas}
                                    </div>
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