import { useParams } from "react-router-dom"
import usePetition from "../../hooks/usePetition"
import "./CriptoPage.css"
import CriptoHistory from "./info/CriptoHistorial"
import CriptoInfo from "./info/CriptoInfo"
import CriptoGraphic from "./info/CriptoGraphic"

const CriptoPage = () => {

  const params = useParams()

  const cripto  = usePetition(`assets/${params.id}`)
  const history = usePetition(`assets/${params.id}/history?interval=d1`)

  return (
  <div className="cripto-page-container">
    { cripto && <CriptoInfo cripto={cripto} /> }
    {<CriptoGraphic cripto={cripto} history={history} />}
    { history && <CriptoHistory history={history} /> }
    
  </div>
  )
}

export default CriptoPage