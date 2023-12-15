import { Suspense } from 'react'
import { Await, defer, useLoaderData, useParams } from 'react-router-dom'
import { getProgramationFood } from '../data/foodAPI'
import { ProductCard } from '../components/ProductCard'
import { SpinnerSkCircle } from '../components/helpers/SpinnerSkCircle'
import '../styles/pages.css'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loaderReservationPage = async ({ params }) => {
  return defer({
    data: getProgramationFood()
  })
}

const ProductsCardsSpinner = () => {
  return (
    <div className="reserva__productos__spinner">
      <SpinnerSkCircle />
      <p className="reserva__productos__spinner__texto">Obteniendo datos de los productos...</p>
    </div>
  )
}

const ProductsCards = (data, category) => {
  const { menu } = data[0];
  const { date, tipo } = useParams();

  return (
    <div className="producto__seccion">
      {menu.filter(product => product.catproducto == category).map(product => (
        <ProductCard key={product.idproducto} product={product} date={date} />
      ))}
    </div>
  )
}

const ReservationPage = () => {
  const { data } = useLoaderData(); 

  return (
    <section className="seccion__reserva contenedor">
      <div className="reserva__contenido">
        <div className="reserva__producto">
          <h2 className="reserva__producto__titulo">Selecciona tu refresco:</h2>
          <Suspense fallback={<ProductsCardsSpinner />}>
            <Await resolve={data}>
              {(resolvedData) => ProductsCards(resolvedData, 'refresco')}
            </Await>
          </Suspense>
        </div>
        <div className="reserva__producto">
          <h2 className="reserva__producto__titulo">Selecciona tu entrada:</h2>
          <Suspense fallback={<ProductsCardsSpinner />}>
            <Await resolve={data}>
              {(resolvedData) => ProductsCards(resolvedData, 'entrada')}
            </Await>
          </Suspense>
        </div>
        <div className="reserva__producto">
          <h2 className="reserva__producto__titulo">Selecciona tu plato de fondo:</h2>
          <Suspense fallback={<ProductsCardsSpinner />}>
            <Await resolve={data}>
              {(resolvedData) => ProductsCards(resolvedData, 'fondo')}
            </Await>
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default ReservationPage