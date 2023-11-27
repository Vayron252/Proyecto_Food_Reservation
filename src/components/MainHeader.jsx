import { Link } from 'react-router-dom'
import '../styles/header.css'
import imagen_logo from '../img/logo_mi_tienda.png'
import { useApp } from '../hooks/useApp'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { Logo } from '../components/Logo'

export const MainHeader = () => {
  const { handleOpenOrCloseSidebar } = useApp();
  const { toggleBodyScroll }  = useBodyScrollLock();

  const handleClickMenuBar = () => {
    toggleBodyScroll();
    handleOpenOrCloseSidebar();
  }

  return (
    <header className="header">
        {/* <Link to={"/"} className="header__contenido__empresa">
          <div className="header__contenedor__logo">
            <img src={imagen_logo} alt="imagen logo" />
          </div>
          <h2 className="header__nombreempresa">Food Store</h2>
        </Link> */}
        <Logo />
        <i className="fa-solid fa-bars header__imagen__barra" onClick={handleClickMenuBar}></i>
    </header>
  )
}
