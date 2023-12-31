import { useEffect } from 'react'
import { useApp } from '../hooks/useApp'
import { useLocation, useNavigate } from 'react-router-dom'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { useScreenSize } from '../hooks/useScreenSize'
import { getCurrentMonth, getCurrentYear, getNameMonthShort } from '../helpers/dateHelpers'
import icohome from '../img/ico_home.png'
import icocalendar from '../img/ico_calendar.png'
import icopromotion from '../img/ico_promotion.png'
import icoproducts from '../img/ico_products.png'
import icoprofile from '../img/ico_profile.png'
import { Logo } from './Logo'
import '../styles/components.css'

export const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { width } = useScreenSize();
    const { openSidebar, handleOpenOrCloseSidebar } = useApp();
    const { toggleBodyScroll }  = useBodyScrollLock();

    const currentMonth = getCurrentMonth();
    const currentYear = getCurrentYear();
    const month_year = `${getNameMonthShort()}${currentYear}`;

    const handleCloseMenuBar = () => {
        if (width >= 992) {
            return;
        }
        toggleBodyScroll();
        handleOpenOrCloseSidebar();
    }

    const handleNavigateLink = (pathName) => {
        navigate(pathName);
        handleCloseMenuBar();
    }

    useEffect(() => {
        const handleResize = () => {
            // Perform actions on window resize
            if (openSidebar) {
                handleCloseMenuBar();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [openSidebar]);

    return (
        <>
            {openSidebar && <div onClick={handleCloseMenuBar} className="sidebar__helper"></div>}
            <div className={`sidebar ${openSidebar ? 'active' : ''}`}>
                <i className="fa-regular fa-circle-xmark sidebar__boton__cerrar" onClick={handleCloseMenuBar}></i>
                <div className="sidebar__contenido">
                    <Logo />
                    <h2 className="sidebar__titulo">Menú Principal</h2>
                    <ul className="sidebar__links">
                        <li
                            className={`sidebar__links__item ${location.pathname === '/' ? 'active' : ''}`}
                            onClick={() => handleNavigateLink("/")}>
                            {/* <i className="fa-solid fa-house sidebar__links__item__imagen"></i> */}
                            <div className="sidebar__links__item__imagen">
                                <img src={icohome} alt="icono casa" />
                            </div>
                            <p className="sidebar__links__item__nombre">Inicio</p>
                        </li>
                        <li
                            className={`sidebar__links__item ${location.pathname === '/calendario' ? 'active' : ''}`}
                            onClick={() => handleNavigateLink('/calendario')}>
                            {/* <i className="fa-solid fa-calendar-days sidebar__links__item__imagen"></i> */}
                            <div className="sidebar__links__item__imagen">
                                <img src={icocalendar} alt="icono calendario" />
                            </div>
                            <p className="sidebar__links__item__nombre">{`${month_year}`}</p>
                        </li>
                        <li
                            className={`sidebar__links__item ${location.pathname === '/productos/almuerzos' ? 'active' : ''}`}
                            onClick={() => handleNavigateLink("/productos/almuerzos")}>
                            {/* <i className="fa-solid fa-bowl-food sidebar__links__item__imagen"></i> */}
                            <div className="sidebar__links__item__imagen">
                                <img src={icoproducts} alt="icono productos" />
                            </div>
                            <p className="sidebar__links__item__nombre">Productos</p>
                        </li>
                        <li
                            className={`sidebar__links__item ${location.pathname === '/promociones' ? 'active' : ''}`}
                            onClick={() => handleNavigateLink("/promociones")}>
                            {/* <i className="fa-solid fa-universal-access sidebar__links__item__imagen"></i> */}
                            <div className="sidebar__links__item__imagen">
                                <img src={icopromotion} alt="icono promociones" />
                            </div>
                            <p className="sidebar__links__item__nombre">Promociones</p>
                        </li>
                        <li
                            className={`sidebar__links__item ${location.pathname === '/perfil' ? 'active' : ''}`}
                            onClick={() => handleNavigateLink("/perfil")}>
                            {/* <i className="fa-solid fa-address-card sidebar__links__item__imagen"></i> */}
                            <div className="sidebar__links__item__imagen">
                                <img src={icoprofile} alt="icono profile" />
                            </div>
                            <p className="sidebar__links__item__nombre">Perfíl</p>
                        </li>
                    </ul>
                </div>
                <div className="sidebar__contenedor__cerrarsession">
                    <i className="fa-solid fa-right-from-bracket sidebar__contenedor__cerrarsession__imagen"></i>
                    <p className="sidebar__contenedor__cerrarsession__texto">Cerrar Sesión</p>
                </div>
            </div>
        </>
    )
}
