import { Suspense, useEffect, useState, useLayoutEffect } from 'react'
import { useNavigate, useParams, useLoaderData, defer, Await } from 'react-router-dom'
import { Calendar } from '../components/Calendar'
import { SpinnerSkCircle } from '../components/helpers/SpinnerSkCircle'
import { getFullDate, getCurrentMonth, getCurrentYear, getCurrentDay, getLastDayOfMonth } from '../helpers/dateHelpers'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getNewProgramation, getLunch } from '../data/foodAPI'
import icoreserva from '../img/ico_reserva.png'
import Swal from 'sweetalert2'
import 'swiper/css'
import '../styles/pages.css'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loaderCalendar = async () => {
    return defer({
        data: {
            daysReserve: getLunch(),
            newProgramation: getNewProgramation()
        }
    })
}

const CalendarPage = () => {
    const { data } = useLoaderData();
    let fecha = "", daySelectRef = null, daysLunch = [];
    const firstDayCurrent = getFullDate(getCurrentYear(), getCurrentMonth(), 1);
    const today = getFullDate(getCurrentYear(), getCurrentMonth(), getCurrentDay());
    const navigate = useNavigate();
    const [calendarShow, setCalendarShow] = useState([{ mes: firstDayCurrent.getMonth() + 1, anio: firstDayCurrent.getFullYear() }]);
    
    useEffect(() => {
      let lastDay = getFullDate(firstDayCurrent.getFullYear(), firstDayCurrent.getMonth() + 1, getLastDayOfMonth(firstDayCurrent));
      let contador = 1;
      let months = [];
      while (contador < 2) {
        const firstDayNext = new Date(lastDay);
        firstDayNext.setDate(firstDayNext.getDate() + 1);
        months.push({ mes: firstDayNext.getMonth() + 1, anio: firstDayNext.getFullYear() });
        lastDay = getFullDate(firstDayNext.getFullYear(), firstDayNext.getMonth() + 1, getLastDayOfMonth(firstDayNext));
        contador++;
      }
      setCalendarShow([...calendarShow, ...months]);
    }, [])

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
        if (daysLunch.filter(days => days.fecha === fecha).length > 0) {
            Swal.fire({
                title: "Mensaje al usuario",
                text: "La fecha seleccionada ya tiene una reserva.",
                icon: "info",
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    fecha = "";
                    daySelectRef.classList.remove('selecc');
                    daySelectRef = null; 
                }
            });
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
                navigate(`/reserva/menu/${fecha.replaceAll('/','-')}`);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                fecha = "";
                daySelectRef.classList.remove('selecc');
                daySelectRef = null;
            }
        });
    }

    const CalendarSpinner = () => {
        return (
            <div className="contenedor__spinner__calendario">
                <SpinnerSkCircle />
                <p className="spinner__calendario__texto">Obteniendo datos de las reservas...</p>
            </div>
        )
    }

    const renderCalendars = (data) => {
        const [ daysReserve, newProgramation ] = data;
        daysLunch = daysReserve;
        const [dayRefSelect, setDayRefSelect] = useState(null);

        const handleSelectDay = (dayRef) => {
            if (dayRefSelect !== null) {
                dayRefSelect.classList.remove('selecc');
            }
            if (dayRef != undefined) {
                dayRef.classList.add('selecc');
                setDayRefSelect(dayRef);
                daySelectRef = dayRef;
                fecha = dayRef.getAttribute('data-date');
            } 
            else {
                setDayRefSelect(null);
                daySelectRef = null;
                fecha = '';
            }
        }

        useLayoutEffect(() => {
          if (dayRefSelect != null) {
            dayRefSelect.classList.remove('selecc');
          }
        }, [])
        
        return (
            <>
                <Swiper spaceBetween={20}>
                    {calendarShow.map((calendar, index) => (
                        <SwiperSlide key={index}>
                            <Calendar
                                today={today} programation={newProgramation}
                                month={calendar.mes} year={calendar.anio} daysLunch={daysLunch} 
                                handleSelectDay={handleSelectDay} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        )
    }

    return (
        <section className="seccion__calendario contenedor">
            <div className="calendario__contenido">
                <h2 className="calendario__contenido__titulo">Realiza tu Reserva</h2>
                <button className="calendario__reservar__boton" onClick={handleClick}>
                    <div className="calendario__reservar__boton__contenedor__imagen">
                        <img src={icoreserva} alt="imagen reserva" />
                    </div>
                    <span>Reservar</span>
                </button>
                <Suspense fallback={<CalendarSpinner />}>
                    <Await resolve={Promise.all([data.daysReserve, data.newProgramation]).then(value => value)}>
                        {(resolvedData) => renderCalendars(resolvedData)}
                    </Await>
                </Suspense>
            </div>
        </section>
    )
}

export default CalendarPage