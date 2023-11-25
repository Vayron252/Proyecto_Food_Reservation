import { Link, useLocation } from 'react-router-dom'
import '../styles/footer.css'

export const MainFooter = () => {
    const location = useLocation();

    return (
        <footer className="footer">
            <Link 
                className={`footer__contenedor__link ${location.pathname === '/' ? 'active' : ''}`} 
                to={"/"}>
                <i className="fa-solid fa-house footer__contenedor__link__imagen"></i>
                <p className="footer__contenedor__link__nombre">Inicio</p>
            </Link>
            <Link 
                className={`footer__contenedor__link ${location.pathname === '/calendario' ? 'active' : ''}`} 
                to={"/calendario"}>
                <i className="fa-solid fa-calendar-days footer__contenedor__link__imagen"></i>
                <p className="footer__contenedor__link__nombre">Calendario</p>
            </Link>
            <Link 
                className={`footer__contenedor__link ${location.pathname === '/productos/almuerzos' ? 'active' : ''}`} 
                to={"/productos/almuerzos"}>
                <i className="fa-solid fa-utensils footer__contenedor__link__imagen"></i>
                <p className="footer__contenedor__link__nombre">Almuerzos</p>
            </Link>
            <Link 
                className={`footer__contenedor__link ${location.pathname === '/perfil' ? 'active' : ''}`} 
                to={"/perfil"}>
                <i className="fa-solid fa-address-card footer__contenedor__link__imagen"></i>
                <p className="footer__contenedor__link__nombre">Perfíl</p>
            </Link>
        </footer>
    )
}
