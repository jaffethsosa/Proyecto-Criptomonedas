import { useEffect, useState } from "react";

const Perfil = () => {

    const [perfil, setPerfil] = useState({}); 

    useEffect(()=>{
        setPerfil({
            name: "Juan",
            age: 25,
            email: "juan@gmail.com",
            phone: "123456789",
            registred: "15/Abril/1987"
        })
    }, [])

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
