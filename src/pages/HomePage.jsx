import { useState, Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { getNewPublications } from '../data/foodAPI'
import { SpinnerCircle } from '../components/helpers/SpinnerCircle'
import { AnnouncementCard } from '../components/AnnouncementCard'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/pages.css'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loaderHome = async () => {
    const publications = getNewPublications(1);
    return defer({
        // data: delay(3000).then(() => publications)
        data: publications
    })
}

const AnnuncementCardSkeleton = () => {
    return (
        <div className="anuncios__contenedor">
            <article className="anuncio">
                <div className="anuncio__contenedor__imagen">
                    <Skeleton height={320} />
                </div>
                <Skeleton count={7} />
            </article>
            <article className="anuncio">
                <div className="anuncio__contenedor__imagen">
                    <Skeleton height={320} />
                </div>
                <Skeleton count={7} />
            </article>
        </div>
    )
}

const HomePage = () => {
    const { data } = useLoaderData();
    const [loading, setLoading] = useState(false);
    const [announcements, setAnnouncements] = useState([]);
    const [page, setPage] = useState(2);

    const handleShowMore = async () => {
        setLoading(true);
        const newPublications = await getNewPublications(page);
        setAnnouncements([...announcements, ...newPublications]);
        setPage(page + 1);
        setLoading(false);
    }

    const renderListPublications = (data) => {
        useEffect(() => {
          setAnnouncements(data);
        }, [])
        
        return (
            <>
                <div className="anuncios__contenedor">
                    {announcements.map(announcement => (
                        <AnnouncementCard 
                            key={announcement.id} announcement={announcement} />
                    ))}
                </div>
                <div className="anuncios__contenedor__mostrarmas">
                    {loading ? (<SpinnerCircle />) :
                        (<button className="anuncios__mostrarmas"
                            onClick={handleShowMore}>
                            <i className="fa-solid fa-circle-chevron-down anuncios__mostrarmas__imagen"></i> Mostrar Más
                        </button>)}
                </div>
            </>
        )
    }
    
    return (
        <section className="seccion__anuncios__comunidad contenedor">
            <div className="panel__anuncios">
                <div className="anuncios__busqueda">
                    <input className="anuncios__busqueda__entrada" type="text" placeholder="Hola Marco Alarcón, ¿qué publicación estás buscando?" />
                    <i className="fa-solid fa-magnifying-glass anuncios__busqueda__imagen"></i>
                </div>
                <Suspense fallback={<AnnuncementCardSkeleton />}>
                    <Await resolve={data}>
                        {(resolvedData) => renderListPublications(resolvedData)}
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