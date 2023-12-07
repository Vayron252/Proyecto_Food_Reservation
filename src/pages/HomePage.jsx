import { useState, Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { getNewPublications } from '../data/foodAPI'
import { SpinnerCircle } from '../components/helpers/SpinnerCircle'
import { AnnouncementCard } from '../components/AnnouncementCard'
import '../styles/pages.css'
import { useEffect } from 'react'

export const loaderHome = () => {
    const publications = getNewPublications();
    return defer({
        data: publications
    })
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = () => {
    const { data } = useLoaderData();

    const [loading, setLoading] = useState(false);
    const [announcements, setAnnouncements] = useState([]);

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
            setAnnouncements([...announcements, 1, 1, 1, 1]);
            setLoading(false);
        }, 2000);
    }

    const handleJaa = async () => {
        // console.log(data);
        // setAnnouncements();
        const resultado = await data;
        console.log(resultado);
        await setAnnouncements(resultado)
    }
    
    return (
        <section className="seccion__anuncios__comunidad contenedor">
            <div className="panel__anuncios">
                <div className="anuncios__busqueda">
                    <input className="anuncios__busqueda__entrada" type="text" placeholder="Hola Marco Alarcón, ¿qué publicación estás buscando?" />
                    <i className="fa-solid fa-magnifying-glass anuncios__busqueda__imagen"></i>
                </div>
                <Suspense fallback={<p>Cargandoooo....</p>}>
                    <Await resolve={data}>
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
                    </Await>
                </Suspense>
            </div>
            <div className="panel__recordatorio">
                <h2>Aún no se ha reservado los almuerzos</h2>
            </div>
        </section>
    )
}

export default HomePage