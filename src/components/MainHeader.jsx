import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import imagen_logo from '../img/logo_mi_tienda.png'
import { useApp } from '../hooks/useApp'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const MainHeader = () => {
  const { handleOpenOrCloseSidebar } = useApp();

  const headerRef = useRef();

    const handleClick = () => {
        const observer2RefValue = headerRef.current;
        console.log(observer2RefValue);
        handleOpenOrCloseSidebar();
        disableBodyScroll(observer2RefValue);
    }

  return (
    <header ref={headerRef} className="header">
        <div className="header__contenedor__logo">
            <Link to={"/"}>
                <img src={imagen_logo} alt="imagen logo" />
            </Link>
        </div>
        <i className="fa-solid fa-bars header__imagen__barra" onClick={handleClick}></i>
    </header>
  )
}
