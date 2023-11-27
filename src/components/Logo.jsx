import { Link } from 'react-router-dom'
import imagen_logo from '../img/logo_mi_tienda.png'
import '../styles/components.css'

export const Logo = () => {
    return (
        <Link to={"/"} className="logo__contenido__empresa">
            <div className="logo__contenedor__logo">
                <img src={imagen_logo} alt="imagen logo" />
            </div>
            <h2 className="logo__nombreempresa">Food Store</h2>
        </Link>
    )
}
