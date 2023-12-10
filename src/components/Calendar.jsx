import { useEffect, useState, useRef, useLayoutEffect } from "react"
import { getNameMonthLong, getFullDate, getLastDayOfMonth, getCurrentDate } from '../helpers/dateHelpers'
import '../styles/components.css'

export const Calendar = ({ month, year, daysLunch, daySelect, setDaySelect }) => {
  const date = getFullDate(year, month, 1);
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  const monthName = getNameMonthLong(date);

  const [numbersDay, setNumbersDay] = useState([]);
  const firstDayOfMonthRef = useRef(null);

  // const daysLunch = ['02/11/2023','10/11/2023','20/11/2023'];
  
  // const [date, setDate] = useState(fechaDate(month, year));
  // const refs = useRef([]);

  const isDisabledDate = (day) => {
    const yearReal = getCurrentDate().getFullYear();
    const monthReal = getCurrentDate().getMonth() + 1;
    if (yearReal === parseInt(year) && monthReal === parseInt(month)) {
      const today = getFullDate(year, month, getCurrentDate().getDate());
      const dateFormat = getFullDate(year, month, day);
      if (dateFormat < today) {
        return true;
      }
      return false;
    } else {
      return false;
    }
  }

  const initializeCalendar = () => {
    // const date = fechaDate(month, year);
    // setMonthName(new Intl.DateTimeFormat('es-PE', { month: 'long' }).format(date));
    const lastDayOfMonth = getLastDayOfMonth(date);
    let days = [];
    let counter = 1;
    while (counter <= lastDayOfMonth) {
      const dateFormater = `${counter.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
      const today = getFullDate(year, month, getCurrentDate().getDate());
      const dayFormat = getFullDate(year, month, counter);
      const day = {
        today: dayFormat.toString() === today.toString() ? true : false, 
        number: counter, 
        date: dateFormater, 
        lunch: daysLunch.includes(dateFormater),
        disabled: isDisabledDate(counter)
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
