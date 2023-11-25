import { Link } from 'react-router-dom'
import '../styles/header.css'
import imagen_logo from '../img/logo_mi_tienda.png'

export const MainHeader = () => {
  return (
    <header className="header">
        <div className="header__contenedor__logo">
            <Link to={"/"}>
                <img src={imagen_logo} alt="imagen logo" />
            </Link>
        </div>
        <i className="fa-solid fa-bars header__imagen__barra"></i>
    </header>
  )
}
