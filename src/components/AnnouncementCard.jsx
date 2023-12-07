// import img_anuncio from '../img/anuncios.jpg'
import { useNavigate } from 'react-router-dom';
import '../styles/components.css'

export const AnnouncementCard = ({ announcement }) => {
    const navigate = useNavigate();
    const { id, nombre, fechapub, creadopor, descripcion, imagen } = announcement;

    const handlePublication = (idPublication) => {
        navigate(`/publicacion/${idPublication}`);
    }

    return (
        <article className="anuncio">
            <div className="anuncio__contenedor__imagen">
                <img className="anuncio__imagen" src={imagen} alt="imagen anuncio" />
            </div>
            <div className="anuncio__contenido">
                <div className="anuncio__contenido__item">
                    <p className="anuncio__contenido__item__descripcion">
                        <span className="anuncio__contenido__item__descripcion__etiqueta">Creado por:</span> {creadopor}
                    </p>
                </div>
                <div className="anuncio__contenido__item">
                    <p className="anuncio__contenido__item__descripcion">
                        <span className="anuncio__contenido__item__descripcion__etiqueta">Fecha:</span> {fechapub}
                    </p>
                </div>
            </div>
            <p className="anuncio__descripcion">{descripcion}</p>
            <button className="anuncio__leermas" onClick={() => handlePublication(id)}>Leer Más</button>
        </article>
    )
}
