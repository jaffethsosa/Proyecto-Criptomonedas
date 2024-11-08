import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password:""
    })

    const submit = (e) => {
        e.preventDefault(); // Evita que el formulario envíe la solicitud de forma predeterminada
        axios.post('https://reqres.in/api/login', user)
            .then(data => {
                localStorage.setItem("tokenCriptoSOSA", data.data.token)
                navigation('/')
            })
            .catch(error => console.log(error));
    };

    if(localStorage.getItem("tokenCriptoSOSA")) return <Navigate to="/"/>

    return(
        <div className="login-container">
            <h1>Inciciar sesion </h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electrinico</label>
                    <input required onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }} type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                </div>
                    <input required onChange={(e)=>{
                        setUser({ ...user, password: e.target.value })
                    }} type="password" name="password" />
                <div className="submi">
                    <input type="submit" value="Ingresar" />
                </div>
            </form>
        </div>
    )
}

export default Login;