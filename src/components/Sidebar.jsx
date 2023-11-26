import { useRef, useEffect } from 'react'
import { useApp } from '../hooks/useApp'
import '../styles/components.css'
import { enableBodyScroll } from 'body-scroll-lock';

export const Sidebar = () => {
    const { openSidebar, handleOpenOrCloseSidebar } = useApp();
    const sidebarRef = useRef();

    const handleClick = () => {
        const observerRefValue = sidebarRef.current;
        console.log(observerRefValue);
        handleOpenOrCloseSidebar();
        enableBodyScroll(observerRefValue);
    }

    return (
        <>
            {/* <div className="sidebar__helper"></div> */}
            {/* <div className={`sidebar ${openSidebar ? 'active' : ''}`}>
                <h2>Hola soy un sidebar</h2>
                <button onClick={handleOpenOrCloseSidebar}>Close</button>
            </div> */}
            {openSidebar && <div className="sidebar__helper"></div>}
            <div ref={sidebarRef} className={`sidebar ${openSidebar ? 'active' : ''}`}>
                <h2>Hola Soy el sidebar</h2>
                <button onClick={handleClick}>Close</button>
            </div>
        </>
    )
}
