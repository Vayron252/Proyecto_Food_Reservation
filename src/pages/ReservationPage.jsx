import { useLoaderData } from 'react-router-dom'
import { getProgramationFood } from '../data/foodAPI'
import { ProductCard } from '../components/ProductCard'
import '../styles/pages.css'

export const loaderReservationPage = async ({ params }) => {
  const data = await getProgramationFood();
  return { data }
}

const ReservationPage = () => {
  const { data } = useLoaderData();
  const { menu } = data[0];

  return (
    <section className="seccion__reserva contenedor">
      <div className="reserva__contenido">
        <div className="reserva__producto">
          <h2 className="reserva__producto__titulo">Selecciona tu refresco:</h2>
          <div className="producto__seccion">
            {menu.filter(product => product.catproducto == 'refresco').map(product => (
              <ProductCard key={product.idproducto} product={product} />
            ))}
          </div>
        </div>
        <div className="reserva__producto">
          <h2 className="reserva__producto__titulo">Selecciona tu entrada:</h2>
          <div className="producto__seccion">
            {menu.filter(product => product.catproducto == 'entrada').map(product => (
              <ProductCard key={product.idproducto} product={product} />
            ))}
          </div>
        </div>
        <div className="reserva__producto">
          <h2 className="reserva__producto__titulo">Selecciona tu plato de fondo:</h2>
          <div className="producto__seccion">
            {menu.filter(product => product.catproducto == 'fondo').map(product => (
              <ProductCard key={product.idproducto} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReservationPage