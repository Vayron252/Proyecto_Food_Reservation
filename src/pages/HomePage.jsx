import { useState, Suspense } from 'react'
import { SpinnerCircle } from '../components/helpers/SpinnerCircle'
import { AnnouncementCard } from '../components/AnnouncementCard'
import '../styles/pages.css'

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [announcements, setAnnouncements] = useState([1]);

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
            setAnnouncements([...announcements, 1, 1, 1, 1]);
            setLoading(false);
        }, 2000);
    }

    return (
        <section className="seccion__anuncios__comunidad contenedor">
            <div className="panel__anuncios">
                <div className="anuncios__busqueda">
                    <input className="anuncios__busqueda__entrada" type="text" placeholder="Hola Marco Alarcón, ¿qué publicación estás buscando?" />
                    <i className="fa-solid fa-magnifying-glass anuncios__busqueda__imagen"></i>
                </div>
                <div className="anuncios__contenedor">
                        {announcements.map((announcement, index) => (
                            <AnnouncementCard key={index} />
                        ))}
                    </div>
                    <div className="anuncios__contenedor__mostrarmas">
                        {loading ? (<SpinnerCircle />) :
                            (<button className="anuncios__mostrarmas" onClick={handleShowMore}>
                                <i className="fa-solid fa-circle-chevron-down anuncios__mostrarmas__imagen"></i> Mostrar Más
                            </button>)}
                        {/* <p className="baaa"><i className="fa-solid fa-circle-chevron-down"></i> Mostrar más</p> */}
                    </div>
            </div>
            <div className="panel__recordatorio">
                <h2>Aún no se ha reservado los almuerzos</h2>
            </div>
        </section>
    )
}

export default HomePage