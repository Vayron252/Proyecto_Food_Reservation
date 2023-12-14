import { useApp } from '../../hooks/useApp'
import '../../styles/footer.css'

export const ReservationFooter = () => {
  const { handleSaveReserve } = useApp();

  return (
    <footer className="footer footer__reserva">
        <div className="footer__contenedor__reserva">
          <button className="footer__boton__reservar" onClick={handleSaveReserve}>Reservar</button>
        </div>
    </footer>
  )
}