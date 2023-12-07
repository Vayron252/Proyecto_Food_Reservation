// import img_anuncio from '../img/anuncios.jpg'
import '../styles/components.css'

export const AnnouncementCard = ({ announcement }) => {
    const { id, nombre, fechapub, descripcion, imagen } = announcement;

    return (
        <article className="anuncio">
            <div className="anuncio__contenedor__imagen">
                <img className="anuncio__imagen" src={imagen} alt="imagen anuncio" />
            </div>
            <p className="anuncio__descripcion">{descripcion}</p>
            <button className="anuncio__leermas">Leer Más</button>
        </article>
    )
}
