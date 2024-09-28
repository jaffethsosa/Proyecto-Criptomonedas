import { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  
  const [criptos, setCriptos] = useState()

  useEffect( () => {
    axios.get(`${API_URL}assets`)
      .then((data) =>{
        console.log(data)
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("La recepcion ha fallado")
      })
  }, [])

  if(!criptos) return <span>Cargando...</span> //pantalla de aviso de carga

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {
          criptos.map(({id, name, priceUsd}) => (
            <li key={id}>Nombre: {name} Precio: $ {parseFloat(priceUsd).toFixed(2)}</li>
          )) 
        }
      </ol>
    </>
  )
}

export default App
