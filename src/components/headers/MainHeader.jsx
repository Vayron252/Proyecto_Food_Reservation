import { useApp } from '../../hooks/useApp'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { Logo } from '../Logo'
import '../../styles/header.css'

export const MainHeader = () => {
  const { handleOpenOrCloseSidebar } = useApp();
  const { toggleBodyScroll } = useBodyScrollLock();

  const handleClickMenuBar = () => {
    toggleBodyScroll();
    handleOpenOrCloseSidebar();
  }

  return (
    <header className="header">
      <Logo />
      <p className="header__titulo">Inicio</p>
      <i className="fa-solid fa-bars header__imagen__barra" onClick={handleClickMenuBar}></i>
      <div className="header__contenido__soporte">
        <i className="fa-regular fa-circle-question soporte__imagen__ayuda"></i>
        <i className="fa-regular fa-envelope soporte__imagen__notificaciones"></i>
        <div className="soporte__usuario">
          <i className="fa-solid fa-circle-user soporte__imagen__usuario"></i>
          <div className="soporte__usuario__contenido">
            <p className="usuario__nombre">Marco Alarcon</p>
            <i className="fa-solid fa-angle-down usuario__flecha"></i>
          </div>
        </div>
      </div>
    </header>
  )
}
