import { useEffect, useState } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {

    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        setUsuario({
            name: "Gerson Sosa",
            registered: "15/Abril/2014"
        })
        }, []);

    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/" >Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
                <li><NavLink to="/perfil" >Perfil de {usuario.name} </NavLink></li>
            </ul>
        </nav>
    );
};

export default Menu;
