import arroz_con_pollo from '../img/arroz-con-pollo.jpg'
import carapulcra from '../img/carapulcra.jpg'
import aji_de_gallina from '../img/aji-de-gallina.avif'
import escabeche_de_pollo from '../img/escabeche-de-pollo.jpg'
import papa_rellena from '../img/papa-rellena.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

import '../styles/pages.css'

export const FoodPage = () => {
  return (
    <section className="seccion__productos contenedor">
      <div className="productos__contenido">
        <h2>Productos</h2>
        <div className="listado__productos">
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
                <p className="producto__almuerzo__dia">LUNES 30 NOV 2023</p>
                <p className="producto__almuerzo__nombre">Arroz con Pollo</p>
                <p className="producto__almuerzo__descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eveniet explicabo quaerat vitae tempora autem maxime quisquam totam cumque quos quo vero, enim non minima praesentium laborum eum incidunt aut!</p>
                <button className="producto__almuerzo__reservar">Reservar</button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="producto__almuerzo">
                <div className="producto__almuerzo__contenedor__imagen">
                  <img className="producto__almuerzo__imagen" src={carapulcra} alt="imagen almuerzo" />
                </div>
                <p className="producto__almuerzo__dia">LUNES 30 NOV 2023</p>
                <p className="producto__almuerzo__nombre">Arroz con Pollo</p>
                <p className="producto__almuerzo__descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eveniet explicabo quaerat vitae tempora autem maxime quisquam totam cumque quos quo vero, enim non minima praesentium laborum eum incidunt aut!</p>
                <button className="producto__almuerzo__reservar">Reservar</button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="producto__almuerzo">
                <div className="producto__almuerzo__contenedor__imagen">
                  <img className="producto__almuerzo__imagen" src={aji_de_gallina} alt="imagen almuerzo" />
                </div>
                <p className="producto__almuerzo__dia">LUNES 30 NOV 2023</p>
                <p className="producto__almuerzo__nombre">Arroz con Pollo</p>
                <p className="producto__almuerzo__descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eveniet explicabo quaerat vitae tempora autem maxime quisquam totam cumque quos quo vero, enim non minima praesentium laborum eum incidunt aut!</p>
                <button className="producto__almuerzo__reservar">Reservar</button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="producto__almuerzo">
                <div className="producto__almuerzo__contenedor__imagen">
                  <img className="producto__almuerzo__imagen" src={escabeche_de_pollo} alt="imagen almuerzo" />
                </div>
                <p className="producto__almuerzo__dia">LUNES 30 NOV 2023</p>
                <p className="producto__almuerzo__nombre">Arroz con Pollo</p>
                <p className="producto__almuerzo__descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eveniet explicabo quaerat vitae tempora autem maxime quisquam totam cumque quos quo vero, enim non minima praesentium laborum eum incidunt aut!</p>
                <button className="producto__almuerzo__reservar">Reservar</button>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="producto__almuerzo">
                <div className="producto__almuerzo__contenedor__imagen">
                  <img className="producto__almuerzo__imagen" src={papa_rellena} alt="imagen almuerzo" />
                </div>
                <p className="producto__almuerzo__dia">LUNES 30 NOV 2023</p>
                <p className="producto__almuerzo__nombre">Arroz con Pollo</p>
                <p className="producto__almuerzo__descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eveniet explicabo quaerat vitae tempora autem maxime quisquam totam cumque quos quo vero, enim non minima praesentium laborum eum incidunt aut!</p>
                <button className="producto__almuerzo__reservar">Reservar</button>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
