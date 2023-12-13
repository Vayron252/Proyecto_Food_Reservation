import { useNavigate, useParams } from 'react-router-dom'
import { useApp } from '../../hooks/useApp'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import '../../styles/header.css'

export const ReservationHeader = () => {
  const navigate = useNavigate();
  const { tipo, date } = useParams();
  const { handleOpenOrCloseSidebar } = useApp();
  const { toggleBodyScroll } = useBodyScrollLock();

  const handleBackPage = () => {
    navigate(-1);
  }

  const handleClickMenuBar = () => {
    toggleBodyScroll();
    handleOpenOrCloseSidebar();
  }

  return (
    <header className="header">
      {/* <button className="" onClick={handleBackPage}></button> */}
      <div className="header__contenido__reserva">
        <i className="fa-solid fa-circle-chevron-left header__atras__boton" onClick={handleBackPage}></i>
        <p className="header__fechareserva">{`Fecha: ${date.replaceAll('-','/')}`}</p>
      </div>
      <i className="fa-solid fa-bars header__imagen__barra" onClick={handleClickMenuBar}></i>
    </header>
  )
}
