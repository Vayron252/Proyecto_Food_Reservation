import arroz_con_pollo from '../img/arroz-con-pollo.jpg'
import carapulcra from '../img/carapulcra.jpg'
import aji_de_gallina from '../img/aji-de-gallina.avif'
import escabeche_de_pollo from '../img/escabeche-de-pollo.jpg'
import papa_rellena from '../img/papa-rellena.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-cards'
import '../styles/pages.css'

const FoodPage = () => {
  return (
    <section className="seccion__productos contenedor">
      <div className="productos__contenido">
        <h2 className="productos__titulo">Nuestros Almuerzos</h2>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <article className="producto__almuerzo">
              <div className="producto__almuerzo__contenedor__imagen">
                <img className="producto__almuerzo__imagen" src={arroz_con_pollo} alt="imagen almuerzo" />
              </div>
              <div className="producto__almuerzo__contenido">
                <p className="producto__almuerzo__dia">Lun, 27 nov 2023</p>
                <p className="producto__almuerzo__nombre">Arroz con Pollo</p>
                <p className="producto__almuerzo__descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eveniet explicabo quaerat vitae tempora autem maxime quisquam totam cumque quos quo vero, enim non minima praesentium laborum eum incidunt aut!</p>
                <button className="producto__almuerzo__reservar">Reservar</button>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="producto__almuerzo">
              <div className="producto__almuerzo__contenedor__imagen">
                <img className="producto__almuerzo__imagen" src={carapulcra} alt="imagen almuerzo" />
              </div>
              <div className="producto__almuerzo__contenido">
                <p className="producto__almuerzo__dia">Mar, 28 nov 2023</p>
                <p className="producto__almuerzo__nombre">Carapulcra</p>
                <p className="producto__almuerzo__descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eveniet explicabo quaerat vitae tempora autem maxime quisquam totam cumque quos quo vero, enim non minima praesentium laborum eum incidunt aut!</p>
                <button className="producto__almuerzo__reservar">Reservar</button>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="producto__almuerzo">
              <div className="producto__almuerzo__contenedor__imagen">
                <img className="producto__almuerzo__imagen" src={aji_de_gallina} alt="imagen almuerzo" />
              </div>
              <div className="producto__almuerzo__contenido">
                <p className="producto__almuerzo__dia">Mie, 29 nov 2023</p>
                <p className="producto__almuerzo__nombre">Aji de Gallina</p>
                <p className="producto__almuerzo__descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eveniet explicabo quaerat vitae tempora autem maxime quisquam totam cumque quos quo vero, enim non minima praesentium laborum eum incidunt aut!</p>
                <button className="producto__almuerzo__reservar">Reservar</button>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="producto__almuerzo">
              <div className="producto__almuerzo__contenedor__imagen">
                <img className="producto__almuerzo__imagen" src={escabeche_de_pollo} alt="imagen almuerzo" />
              </div>
              <div className="producto__almuerzo__contenido">
                <p className="producto__almuerzo__dia">Jue, 30 nov 2023</p>
                <p className="producto__almuerzo__nombre">Escabeche de Pollo</p>
                <p className="producto__almuerzo__descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eveniet explicabo quaerat vitae tempora autem maxime quisquam totam cumque quos quo vero, enim non minima praesentium laborum eum incidunt aut!</p>
                <button className="producto__almuerzo__reservar">Reservar</button>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="producto__almuerzo">
              <div className="producto__almuerzo__contenedor__imagen">
                <img className="producto__almuerzo__imagen" src={papa_rellena} alt="imagen almuerzo" />
              </div>
              <div className="producto__almuerzo__contenido">
                <p className="producto__almuerzo__dia">Vie, 01 dic 2023</p>
                <p className="producto__almuerzo__nombre">Papa Rellena</p>
                <p className="producto__almuerzo__descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eveniet explicabo quaerat vitae tempora autem maxime quisquam totam cumque quos quo vero, enim non minima praesentium laborum eum incidunt aut!</p>
                <button className="producto__almuerzo__reservar">Reservar</button>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default FoodPage