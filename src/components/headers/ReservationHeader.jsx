import { useNavigate } from 'react-router-dom'
import '../../styles/header.css'

export const ReservationHeader = () => {
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  }

  return (
    <div className="header">
      {/* <button className="" onClick={handleBackPage}></button> */}
      <i className="fa-solid fa-circle-chevron-left header__atras__boton" onClick={handleBackPage}></i>
    </div>
  )
}
