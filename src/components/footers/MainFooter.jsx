import { Link, useLocation } from 'react-router-dom'
import '../../styles/footer.css'
import icohome from '../../img/ico_home.png'
import icocalendar from '../../img/ico_calendar.png'
import icolunch from '../../img/ico_lunch.png'
import icoprofile from '../../img/ico_profile.png'

export const MainFooter = () => {
    const location = useLocation();

    return (
        <footer className="footer">
            <Link 
                className={`footer__contenedor__link ${location.pathname === '/' ? 'active' : ''}`} 
                to={"/"}>
                {/* <i className="fa-solid fa-house footer__contenedor__link__imagen"></i> */}
                <div className="footer__contenedor__link__imagen">
                    <img src={icohome} alt="icono casa" />
                </div>
                <p className="footer__contenedor__link__nombre">Inicio</p>
            </Link>
            <Link 
                className={`footer__contenedor__link ${location.pathname === '/calendario' ? 'active' : ''}`} 
                to={"/calendario"}>
                {/* <i className="fa-solid fa-calendar-days footer__contenedor__link__imagen"></i> */}
                <div className="footer__contenedor__link__imagen">
                    <img src={icocalendar} alt="icono calendario" />
                </div>
                <p className="footer__contenedor__link__nombre">Calendario</p>
            </Link>
            <Link 
                className={`footer__contenedor__link ${location.pathname === '/productos/almuerzos' ? 'active' : ''}`} 
                to={"/productos/almuerzos"}>
                {/* <i className="fa-solid fa-utensils footer__contenedor__link__imagen"></i> */}
                <div className="footer__contenedor__link__imagen">
                    <img src={icolunch} alt="icono almuerzos" />
                </div>
                <p className="footer__contenedor__link__nombre">Almuerzos</p>
            </Link>
            <Link 
                className={`footer__contenedor__link ${location.pathname === '/perfil' ? 'active' : ''}`} 
                to={"/perfil"}>
                {/* <i className="fa-solid fa-address-card footer__contenedor__link__imagen"></i> */}
                <div className="footer__contenedor__link__imagen">
                    <img src={icoprofile} alt="icono perfil" />
                </div>
                <p className="footer__contenedor__link__nombre">Perfíl</p>
            </Link>
        </footer>
    )
}
