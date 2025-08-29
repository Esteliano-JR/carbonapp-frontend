
import ReactDOM from 'react-dom/client'
import "./app.css";
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from "./routes";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
)
