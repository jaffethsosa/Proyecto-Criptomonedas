import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/" activeClassName="active">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas" activeClassName="active">Lista de Criptos</NavLink></li>
            </ul>
        </nav>
    );
};

export default Menu;
