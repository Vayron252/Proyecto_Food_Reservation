import { useApp } from '../hooks/useApp'
import { useLocation, useNavigate } from 'react-router-dom'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import '../styles/components.css'

export const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { openSidebar, handleOpenOrCloseSidebar } = useApp();
    const { toggleBodyScroll }  = useBodyScrollLock();

    const handleCloseMenuBar = () => {
        toggleBodyScroll();
        handleOpenOrCloseSidebar();
    }

    const handleNavigateLink = (pathName) => {
        navigate(pathName);
        handleCloseMenuBar();
    }

    return (
        <>
            {openSidebar && <div onClick={handleCloseMenuBar} className="sidebar__helper"></div>}
            <div className={`sidebar ${openSidebar ? 'active' : ''}`}>
                <i className="fa-regular fa-circle-xmark sidebar__boton__cerrar" onClick={handleCloseMenuBar}></i>
                <h2 className="sidebar__titulo">Menú Principal</h2>
                <ul className="sidebar__links">
                    <li 
                        className={`sidebar__links__item ${location.pathname === '/' ? 'active' : ''}`} 
                        onClick={() => handleNavigateLink("/")}>
                        <i className="fa-solid fa-house sidebar__links__item__imagen"></i>
                        <p className="sidebar__links__item__nombre">Inicio</p>
                    </li>
                    <li 
                        className={`sidebar__links__item ${location.pathname === '/calendario' ? 'active' : ''}`} 
                        onClick={() => handleNavigateLink("/calendario")}>
                        <i className="fa-solid fa-calendar-days sidebar__links__item__imagen"></i>
                        <p className="sidebar__links__item__nombre">Calendario</p>
                    </li>
                    <li 
                        className={`sidebar__links__item ${location.pathname === '/productos/almuerzos' ? 'active' : ''}`} 
                        onClick={() => handleNavigateLink("/productos/almuerzos")}>
                        <i className="fa-solid fa-bowl-food sidebar__links__item__imagen"></i>
                        <p className="sidebar__links__item__nombre">Productos</p>
                    </li>
                    <li 
                        className={`sidebar__links__item ${location.pathname === '/promociones' ? 'active' : ''}`} 
                        onClick={() => handleNavigateLink("/promociones")}>
                        <i className="fa-solid fa-universal-access sidebar__links__item__imagen"></i>
                        <p className="sidebar__links__item__nombre">Promociones</p>
                    </li>
                    <li 
                        className={`sidebar__links__item ${location.pathname === '/perfil' ? 'active' : ''}`} 
                        onClick={() => handleNavigateLink("/perfil")}>
                        <i className="fa-solid fa-address-card sidebar__links__item__imagen"></i>
                        <p className="sidebar__links__item__nombre">Perfíl</p>
                    </li>
                </ul>
                <div className="sidebar__contenedor__cerrarsession">
                    <i className="fa-solid fa-right-from-bracket sidebar__contenedor__cerrarsession__imagen"></i>
                    <p className="sidebar__contenedor__cerrarsession__texto">Cerrar Sesión</p>
                </div>
            </div>
        </>
    )
}
