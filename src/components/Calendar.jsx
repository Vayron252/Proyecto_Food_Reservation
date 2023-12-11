import { useEffect, useState, useRef, useLayoutEffect } from "react"
import { getNameMonthLong, getFullDate, getLastDayOfMonth, getFormatDateSlash } from '../helpers/dateHelpers'
import '../styles/components.css'

export const Calendar = ({ month, year, today, daysLunch, daySelect, setDaySelect, programation }) => {
  const date = getFullDate(year, month, 1);
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  const monthName = getNameMonthLong(date);

  const [numbersDay, setNumbersDay] = useState([]);
  const firstDayOfMonthRef = useRef(null);
  
  // const refs = useRef([]);
  const isDisabledDay = (dayCalendar) => {
    let validations = [];
    programation.forEach(prog => {
      const { fecinicio, fecfin } = prog;
      const finicial = getFullDate(fecinicio.split('/')[2], fecinicio.split('/')[1], fecinicio.split('/')[0]);
      const ffinal = getFullDate(fecfin.split('/')[2], fecfin.split('/')[1], fecfin.split('/')[0]);
      if (dayCalendar >= finicial && dayCalendar <= ffinal) {
        validations.push(false);
      } else {
        validations.push(true);
      }
    });
    const resultValidation = validations.some(val => !val);
    // if (!resultValid) {
    //   if (dayCalendar < today) {
    //     return true;
    //   }
    // }
    return !resultValidation;
  }

  const initializeCalendar = () => {
    // const date = fechaDate(month, year);
    // setMonthName(new Intl.DateTimeFormat('es-PE', { month: 'long' }).format(date));
    const lastDayOfMonth = getLastDayOfMonth(date);
    let days = [];
    let counter = 1;
    while (counter <= lastDayOfMonth) {
      const dateFormater = getFormatDateSlash(year, month, counter);
      const dayCalendar = getFullDate(year, month, counter);
      const day = {
        today: dayCalendar.getTime() === today.getTime() ? true : false, 
        number: counter, 
        date: dateFormater, 
        lunch: daysLunch.includes(dateFormater),
        // disabled: dayCalendar < today ? true : false
        disabled: isDisabledDay(dayCalendar)
      }
      days.push(day);
      counter++;
    }
    setNumbersDay(days);
    // initialDayOfMonthRef.current.style.gridColumn = `${date.getDay() + 1} / span 1`;
    // console.log(refs.current);
  }

  useEffect(() => {
    initializeCalendar();
  }, [month, year, daysLunch])

  useLayoutEffect(() => {
    // console.log(refs.current);
    // refs.current.style.gridColumn = `1 / span 1`;
    // if (refs.current[0]) {
    //   refs.current[0].style.gridColumn = `${date.getDay() + 1} / span 1`;
    //   // console.log(refs.current[0].style.gridColumn = `1 / span 1`)
    // }
    if (firstDayOfMonthRef.current) {
      firstDayOfMonthRef.current.style.gridColumn = `${date.getDay() + 1} / span 1`;
    }
  });

  const handleClickDay = (e) => {
    if (daySelect !== null) {
      daySelect.classList.remove('selecc');
    }
    e.target.classList.add('selecc');
    // const fechaSeleccionada = e.target.getAttribute('data-fecha');
    // setFecha(fechaSeleccionada);
    setDaySelect(e.target);
  }

  return (
    <div className="calendario__mes">
      <h2 className="calendario__mes__nombre">{`${monthName.toUpperCase()} - ${year}`}</h2>
      <div className="calendario__mes__semana">
        {daysOfWeek.map(dayName => (
          <div className="calendario__mes__semana__dia" key={dayName}>{dayName}</div>
        ))}
      </div>
      <div className="calendario__mes__dias">
        {/* <div ref={initialDayOfMonthRef} className="calendario__mes__dia" key={1}>1</div> */}
        {/* {numbersDay.map(dayNumber => (
            dayNumber !== 1 ? <div className="calendario__mes__dia" key={dayNumber}>{dayNumber}</div> : null
          ))} */}
        {/* ref={ref => (refs.current[i] = ref)} */}
        {numbersDay.map((dayNumber, i) => (
          <div disabled={dayNumber.disabled} ref={dayNumber.number === 1 ? firstDayOfMonthRef : null}
            onClick={handleClickDay} data-date={dayNumber.date}
            className="calendario__mes__dia"
            key={dayNumber.number}>
            {dayNumber.number} 
            {dayNumber.lunch && <div className="calendario__mes__dia__almuerzo"><i className="fa-solid fa-utensils"></i></div>}
            {dayNumber.today && <div className="calendario__mes__dia__hoy"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
