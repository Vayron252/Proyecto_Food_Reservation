import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar } from '../components/Calendar'
import Swal from 'sweetalert2'
import '../styles/pages.css'
import icoreserva from '../img/ico_reserva.png'

const CalendarPage = () => {
    const navigate = useNavigate();
    const [daysLunch, setDaysLunch] = useState([]);
    const [fecha, setFecha] = useState('');
    const [daySelect, setDaySelect] = useState(null);

    const meses = [
        {
            month: 11,
            year: 2023
        }
    ]

    const handleClick = () => {
        if(fecha === '') {
            Swal.fire({
                title: "Mensaje al usuario",
                text: "Debe seleccionar una fecha.",
                icon: "warning",
                allowOutsideClick: false
            });
            return;
        }
        if (daysLunch.includes(fecha)) {
            alert("Ya no más!!!");
            return;
        }
        Swal.fire({
            title: `¿Desea reservar para el día ${fecha}?`,
            text: "",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Si, Reservar!",
            cancelButtonText: "Cancelar",
            allowOutsideClick: false
          }).then((result) => {
            if (result.isConfirmed) {
                navigate('/reserva/menu/01-12-2023');
                // setDaysLunch([...daysLunch, fecha]);
                // setFecha('');
                // daySelect.classList.remove('selecc');
                // setDaySelect(null);
                // Swal.fire({
                //     title: "Reservado!",
                //     text: "Se ha realizado tu reserva.",
                //     icon: "success",
                //     timer: 2000,
                //     showConfirmButton: false,
                //     allowOutsideClick: false
                // });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                setFecha('');
            }
          });
    }

    return (
        <section className="seccion__calendario contenedor">
            <button className="calendario__reservar__boton" onClick={handleClick}>
                <div className="calendario__reservar__boton__contenedor__imagen">
                    <img src={icoreserva} alt="imagen reserva" />
                </div>
                <span>Reservar</span>
            </button>
            <input type="text" onChange={e => setFecha(e.target.value)} value={fecha} />
            {meses.map((valor, index) => (
                <Calendar key={index} month={valor.month} year={valor.year} daysLunch={daysLunch} setFecha={setFecha} daySelect={daySelect} setDaySelect={setDaySelect} />
            ))}
        </section>
    )
}

export default CalendarPage