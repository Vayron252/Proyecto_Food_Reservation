import { useApp } from '../hooks/useApp'
import '../styles/components.css'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'

export const Sidebar = () => {
    const { openSidebar, handleOpenOrCloseSidebar } = useApp();
    const { toggleBodyScroll }  = useBodyScrollLock();

    const handleCloseMenuBar = () => {
        toggleBodyScroll();
        handleOpenOrCloseSidebar();
    }

    return (
        <>
            {openSidebar && <div onClick={handleCloseMenuBar} className="sidebar__helper"></div>}
            <div className={`sidebar ${openSidebar ? 'active' : ''}`}>
                <i className="fa-regular fa-circle-xmark sidebar__boton__cerrar" onClick={handleCloseMenuBar}></i>
                <h2 className="sidebar__titulo">Menú Principal</h2>
                <ul className="sidebar__links">
                    <li className="sidebar__links__item">Inicio</li>
                    <li className="sidebar__links__item">Calendario</li>
                    <li className="sidebar__links__item">Productos</li>
                    <li className="sidebar__links__item">Promociones</li>
                    <li className="sidebar__links__item">Perfíl</li>
                </ul>
            </div>
        </>
    )
}
