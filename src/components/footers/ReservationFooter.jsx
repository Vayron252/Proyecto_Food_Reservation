import { saveReserve } from '../../data/foodAPI'
import { useApp } from '../../hooks/useApp'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../styles/footer.css'

export const ReservationFooter = () => {
  const navigate = useNavigate();
  const { reserve, setReserve } = useApp();

  const handleSaveReserve = async () => {
    Swal.fire({
      title: `¿Está seguro(a) de realizar la reserva?`,
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si, Reservar!",
      cancelButtonText: "Cancelar",
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Mensaje al usuario",
          text: "Realizando la reserva...",
          allowOutsideClick: false,
          didOpen: async () => {
            Swal.showLoading();
            const reserveDone = await saveReserve(reserve);
            if (Object.keys(reserveDone).length > 0) {
              Swal.clickConfirm();
            }
          }
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Mensaje al usuario",
              text: "La reserva se realizó correctamente.",
              icon: "success",
              allowOutsideClick: false
            }).then((result) => {
              if (result.isConfirmed) {
                setReserve({});
                navigate('/calendario', { replace: true });
              }
            });
          }
        });
      }
    });
  }

  return (
    <footer className="footer footer__reserva">
      <div className="footer__contenedor__reserva">
        <button className="footer__boton__reservar" onClick={handleSaveReserve}>Reservar</button>
      </div>
    </footer>
  )
}