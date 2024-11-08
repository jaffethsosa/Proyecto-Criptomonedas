import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Perfil = () => {

    const perfil = useContext(UserContext)

    return (
        <div>
            <h1>Perfil de {perfil.name}</h1>
            <div>
                <p>Edad: {perfil.age}</p>
                <p>Email: {perfil.email}</p>
                <p>Telefono: {perfil.phone}</p>
                <p>Usuario desde: {perfil.registred}</p>
            </div>
        </div>
    )
}

export default Perfil
