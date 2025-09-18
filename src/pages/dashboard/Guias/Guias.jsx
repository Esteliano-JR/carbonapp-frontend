import "./Guias.css"

function Guias() {
    return (
        <main className="back-guia">
            <div className="guia-text">
                <h1>Guia de separação</h1>
                <p>Aprenda a separar cada tipo de material corretamente e maximize seus pontos</p>
            </div>
            <div className="div-center">
                <div className="guia">
                    <div>Alumínio</div>
                    <div>50 pts/kg</div>
                </div>

                <div className="guia">
                    <div>
                        Plástico
                    </div>
                </div>
                <div className="guia">
                    <div>
                        ferro
                    </div>
                </div>
                <div className="guia-baixo">
                    metal
                </div>
            </div>
        </main>
    );
}
export default Guias;