import { useState } from 'react'
import { Calendar } from '../components/Calendar'
import Swal from 'sweetalert2'
import '../styles/pages.css'

const CalendarPage = () => {
    const [daysLunch, setDaysLunch] = useState([]);
    const [fecha, setFecha] = useState('');

    const meses = [
        {
            month: 11,
            year: 2023
        }
    ]

    const handleClick = () => {
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
                setDaysLunch([...daysLunch, fecha]);
                Swal.fire({
                    title: "Reservado!",
                    text: "Se ha realizado tu reserva.",
                    icon: "success"
                });
            }
          });
    }

    return (
        <section className="seccion__calendario contenedor">
            <button className="calendario__agregar" onClick={handleClick}>
                <span>28</span>
                <span>Nov</span>
            </button>
            <input type="text" onChange={e => setFecha(e.target.value)} value={fecha} />
            {meses.map((valor, index) => (
                <Calendar key={index} month={valor.month} year={valor.year} daysLunch={daysLunch} setFecha={setFecha} />
            ))}
        </section>
    )
}

export default CalendarPage