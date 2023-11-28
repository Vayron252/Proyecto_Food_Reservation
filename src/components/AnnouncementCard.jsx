import img_anuncio from '../img/anuncios.jpg'

export const AnnouncementCard = () => {
    return (
        <article className="anuncio">
            <div className="anuncio__contenedor__imagen">
                <img src={img_anuncio} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo nesciunt tempora corrupti repudiandae, ipsum laudantium voluptatibus, dolorum libero porro molestiae quaerat ea fugiat accusamus dolorem animi nulla omnis magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta consequuntur amet ipsum expedita distinctio, dolor laborum accusamus perspiciatis non quasi excepturi eius sapiente nulla pariatur temporibus eaque nam asperiores.</p>
            <button className="">Leer Más</button>
        </article>
    )
}
