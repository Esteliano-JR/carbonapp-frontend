import Header from "../../componentes/Header/Header";
import "./style.css"

function Home() {
  return (
    <div className="container-header">
      <Header/>

      <div className="container-home">
        <h1>Home - Ecopoints</h1>
      </div>
    </div>

  );
}

export default Home;
