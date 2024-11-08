import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password:""
    })

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState()


    const submit = (e) => {
        e.preventDefault(); 
        setCargando(true)
        setError(null)
        axios.post('https://reqres.in/api/login', user)
            .then(data => {
                setCargando(false)
                localStorage.setItem("tokenCriptoSOSA", data.data.token)
                navigation('/')
            })
            .catch(error => {
                setCargando(false)
                console.log(error)
                setError(error.response.data.error)
            });
    };

    if(localStorage.getItem("tokenCriptoSOSA")) return <Navigate to="/"/>

    return(
        <div className="title">
            <h1>Bienvenido a CriptoSOSA</h1>
        <div className="login-container">
            <h1>Iniciar sesión </h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electrinico</label>
                    <p/>
                    <input required onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }} type="email" name="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <p/>
                    <input required onChange={(e)=>{
                        setUser({ ...user, password: e.target.value })
                    }} type="password" name="password" />
                </div>
                
                    
                <div className="submi">
                    <input type="submit" 
                    value={cargando ? "cargando...": "Ingresar"} 
                    className="link" 
                    />
                </div>
            </form>
            {
             error && <span className="error">Error : {error}</span>
            }
        </div>
    </div>
    )
}

export default Login;