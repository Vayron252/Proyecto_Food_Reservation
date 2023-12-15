import { saveReserve } from '../../data/foodAPI'
import { useApp } from '../../hooks/useApp'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../styles/footer.css'

export const ReservationFooter = () => {
  const navigate = useNavigate();
  const { reserve, setReserve } = useApp();

  const handleSaveReserve = async () => {
    const result = await saveReserve(reserve);
    if (Object.keys(result).length > 0) {
      Swal.fire({
        title: "Mensaje al usuario",
        text: "La reserva se realizó correctamente.",
        icon: "success",
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
          setReserve({})
          navigate('/calendario')
        }
      });
    }
  }

  return (
    <footer className="footer footer__reserva">
      <div className="footer__contenedor__reserva">
        <button className="footer__boton__reservar" onClick={handleSaveReserve}>Reservar</button>
      </div>
    </footer>
  )
}