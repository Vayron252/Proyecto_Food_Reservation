import img_anuncio from '../img/anuncios.jpg'
import '../styles/pages.css'

export const HomePage = () => {
    return (
        <section className="seccion__anuncios__comunidad contenedor">
            <div className="anuncios__busqueda">
                <input className="anuncios__busqueda__entrada" type="text" placeholder="Hola Marco Alarcón, ¿qué publicación estás buscando?" />
                <i className="fa-solid fa-magnifying-glass anuncios__busqueda__imagen"></i>
            </div>
            <div className="anuncios__contenedor">
                <article className="anuncio">
                    <div className="anuncio__contenedor__imagen">
                        <img src={img_anuncio} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo nesciunt tempora corrupti repudiandae, ipsum laudantium voluptatibus, dolorum libero porro molestiae quaerat ea fugiat accusamus dolorem animi nulla omnis magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta consequuntur amet ipsum expedita distinctio, dolor laborum accusamus perspiciatis non quasi excepturi eius sapiente nulla pariatur temporibus eaque nam asperiores.</p>
                    <button className="">Leer Más</button>
                </article>
            </div>
            <div className="anuncios__contenedor__mostrarmas">
                <button className="anuncios__mostrarmas">
                    <i className="fa-solid fa-circle-chevron-down anuncios__mostrarmas__imagen"></i> Mostrar Más
                </button>
            </div>
        </section>
    )
}
