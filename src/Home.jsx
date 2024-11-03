import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Hola, Bienvenido a CriptoSosa</h1>
            <p>Conoce las 100 Criptomonedas más usadas.</p>
            <Link to="/criptomonedas">Ver Criptomonedas</Link>
        </div>
    );
}

export default Home;
