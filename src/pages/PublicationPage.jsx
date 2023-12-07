import { useLoaderData } from 'react-router-dom';
import { getPublication } from '../data/foodAPI';
import '../styles/pages.css'

export const loaderPublication = async ({ params }) => {
  const { id } = params;
  const publication = await getPublication(id);
  return {
    data: publication[0]
  }
}

const PublicationPage = () => {
  const { data } = useLoaderData();
  const { id, nombre, fechapub, creadopor, descripcion, imagen } = data;
  
  return (
    <section className="seccion__publicacion contenedor">
      <div className="publicacion__contenido">
        <h2 className="publicacion__titulo">{nombre}</h2>
        <div className="publicacion__informacion">
          <div className="publicacion__imagen__contenedor">
            <img src={imagen} alt="imagen puvlicacion" />
          </div>
          <p className="publicacion__descripcion">{descripcion}</p>
        </div>
      </div>
    </section>
  )
}

export default PublicationPage