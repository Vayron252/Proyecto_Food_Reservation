import { Suspense, useEffect, useState, useLayoutEffect } from 'react'
import { useNavigate, useParams, useLoaderData, defer, Await } from 'react-router-dom'
import { Calendar } from '../components/Calendar'
import { SpinnerSkCircle } from '../components/helpers/SpinnerSkCircle'
import { SpinnerCircle } from '../components/helpers/SpinnerCircle'
import { getFullDate, getNameMonthLong, getCurrentDate, 
         getCurrentMonth, getCurrentYear, getCurrentDay, getLastDayOfMonth } from '../helpers/dateHelpers'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getNewProgramation, getLunch } from '../data/foodAPI'
import icoreserva from '../img/ico_reserva.png'
import Swal from 'sweetalert2'
import 'swiper/css'
import '../styles/pages.css'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loaderCalendar = async () => {
    // const daysReserve = await getLunch();
    // const newProgramation = await getNewProgramation();
    // const [daysReserve, newProgramation] = Promise.all([
    //     getLunch(), getNewProgramation()
    // ])
    // console.log(daysReserve)
    return defer({
        data: {
            daysReserve: getLunch(),
            newProgramation: getNewProgramation()
        }
    })
}

const CalendarPage = () => {
    // const { daysReserve, newProgramation } = useLoaderData();
    const { data } = useLoaderData();
    let fecha = "", daySelect = null;
    const firstDayCurrent = getFullDate(getCurrentYear(), getCurrentMonth(), 1);
    // let calendarShow = [{ mes: firstDayCurrent.getMonth() + 1, anio: firstDayCurrent.getFullYear() }];
    const today = getFullDate(getCurrentYear(), getCurrentMonth(), getCurrentDay());
    const navigate = useNavigate();
    const [daysLunch, setDaysLunch] = useState([]);
    // const [fecha, setFecha] = useState('');
    // const [daySelect, setDaySelect] = useState(null);
    const [isDisabledNewProgramation, setIsDisabledNewProgramation] = useState(false);
    const [loading, setLoading] = useState(false);
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
    //   console.log(calendarShow);
      setCalendarShow([...calendarShow, ...months]);
    //   setDaysLunch(daysReserve);
    }, [])

    // useEffect(() => {
    //     if (daySelect) {
    //         setFecha(daySelect.getAttribute('data-date'));
    //     }
    // }, [daySelect])

    const handleSelectDay = (element) => {
        if (daySelect !== null) {
            daySelect.classList.remove('selecc');
        }
        element.target.classList.add('selecc');
        //   const fechaSeleccionada = e.target.getAttribute('data-fecha');
        //   setFecha(fechaSeleccionada);
        //setDaySelect(element.target);
        daySelect = element.target;
        fecha = daySelect.getAttribute('data-date');
    }

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
        // if (daysLunch.includes(fecha)) {
        if (daysLunch.filter(days => days.fecha === fecha).length > 0) {
            Swal.fire({
                title: "Mensaje al usuario",
                text: "La fecha seleccionada ya tiene una reserva.",
                icon: "info",
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    fecha = "";
                    daySelect.classList.remove('selecc');
                    daySelect = null; 
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
                fecha = "";
                daySelect.classList.remove('selecc');
                daySelect = null;
            }
        });
    }

    const handleTest = () => {
        let programationLunch;
        Swal.fire({
            title: "Programaciones activas",
            text: "Obteniendo datos...",
            allowOutsideClick: false,
            didOpen: async () => {
                Swal.showLoading();
                programationLunch = await getNewProgramation();
                Swal.clickConfirm();
            }
        }).then((result) => {
            if (result.isConfirmed) {
                if (Object.keys(programationLunch).length <= 0) {
                    Swal.fire({
                        title: "Error!",
                        text: "No se ha encontrado una programación activa.",
                        icon: "error",
                        showConfirmButton: true,
                        allowOutsideClick: false
                    });
                    return;
                }

                const date = getFullDate(programationLunch.anio, programationLunch.mes, 1);
                const nameMonth = getNameMonthLong(date);

                Swal.fire({
                    title: `¿Desea realizar la reserva para ${nameMonth} - ${programationLunch.anio}?`,
                    text: "",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Si, Realizar!",
                    cancelButtonText: "Cancelar",
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(`/calendario/${programationLunch.mes}/${programationLunch.anio}`);
                    }
                });
            }
        });
    }

    const handleNewCalendarReserve = async () => {
        setLoading(true);
        const programationLunch = await getNewProgramation();
        setLoading(false);        
        if (Object.keys(programationLunch).length <= 0) {
            setLoading(false);
            Swal.fire({
                title: "Error!",
                text: "No se ha encontrado una programación activa.",
                icon: "error",
                showConfirmButton: true,
                allowOutsideClick: false
            });
            return;
        }

        const date = getFullDate(programationLunch.anio, programationLunch.mes, 1);
        const nameMonth = getNameMonthLong(date);

        Swal.fire({
            title: `¿Desea realizar la reserva para ${nameMonth} - ${programationLunch.anio}?`,
            text: "",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Si, Realizar!",
            cancelButtonText: "Cancelar",
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/calendario/${programationLunch.mes}/${programationLunch.anio}`);
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

        // useEffect(() => {
          
        // }, [])

        useLayoutEffect(() => {
            setDaysLunch(daysReserve);
        }, []);
        
        return (
            <>
                <Swiper spaceBetween={20}>
                    {calendarShow.map((calendar, index) => (
                        <SwiperSlide key={index}>
                            <Calendar
                                today={today} programation={newProgramation}
                                month={calendar.mes} year={calendar.anio} daysLunch={daysLunch} 
                                // daySelect={daySelect} setDaySelect={setDaySelect} 
                                handleSelectDay={handleSelectDay} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        )
    }

    return (
        <section className="seccion__calendario contenedor">
            {/* <div className="calendario__opciones">
                <h2 className="calendario__opciones__titulo">Menú de Opciones</h2>
                <div className="calendario__opciones__contenido">
                    <div className="calendario__opciones__opcion">
                        <button className="calendario__opciones__boton">
                            <i className="fa-solid fa-circle-question calendario__opciones__boton__imagen"></i>
                        </button>
                        <p className="calendario__opciones__nombre">Preguntas Frecuentes</p>
                    </div>
                    <div className="calendario__opciones__opcion">
                        <button className="calendario__opciones__boton">
                            <i className="fa-solid fa-table-list calendario__opciones__boton__imagen"></i>
                        </button>
                        <p className="calendario__opciones__nombre">Ver Por Listado</p>
                    </div>
                    <div className="calendario__opciones__opcion">
                        <button className="calendario__opciones__boton" onClick={handleTest}>
                            <i className="fa-solid fa-eye calendario__opciones__boton__imagen"></i>
                        </button>
                        <p className="calendario__opciones__nombre">Ver Programación</p>
                    </div>
                    <div className="calendario__opciones__opcion">
                        {loading ? (<SpinnerSkCircle />) : (
                            <>
                                <button disabled={isDisabledNewProgramation} className="calendario__opciones__boton" onClick={handleNewCalendarReserve}>
                                    <i className="fa-regular fa-calendar-days calendario__opciones__boton__imagen"></i>
                                </button>
                                <p className="calendario__opciones__nombre">Próx. Programación</p>
                            </>
                        )}
                    </div>
                </div>
            </div> */}
            <div className="calendario__contenido">
                <h2 className="calendario__contenido__titulo">Realiza tu Reserva</h2>
                <button className="calendario__reservar__boton" onClick={handleClick}>
                    <div className="calendario__reservar__boton__contenedor__imagen">
                        <img src={icoreserva} alt="imagen reserva" />
                    </div>
                    <span>Reservar</span>
                </button>
                {/* <input type="text" onChange={e => setFecha(e.target.value)} value={fecha} /> */}
                {/* {meses.map((valor, index) => (
                        <Calendar key={index} month={valor.month} year={valor.year} daysLunch={daysLunch} setFecha={setFecha} daySelect={daySelect} setDaySelect={setDaySelect} />
                    ))} */}
                {/* <Swiper spaceBetween={20}>
                    {calendarShow.map((calendar, index) => (
                        <SwiperSlide key={index}>
                            <Calendar
                                today={today} programation={newProgramation}
                                month={calendar.mes} year={calendar.anio} daysLunch={daysLunch} 
                                daySelect={daySelect} setDaySelect={setDaySelect} />
                        </SwiperSlide>
                    ))}
                </Swiper> */}
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