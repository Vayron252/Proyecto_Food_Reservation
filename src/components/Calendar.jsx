import { useEffect, useState, useRef, useLayoutEffect } from "react"
import '../styles/components.css'

const fechaDate = (month, year) => {
  const parts = (`${year}-${month.toString().padStart(2, '0')}-01`).split('-');
  const mydate = new Date(parts[0], parts[1] - 1, parts[2]);
  return mydate;
}

export const Calendar = ({ month, year, daysLunch, daySelect, setDaySelect }) => {
  const date = fechaDate(month, year);
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  const [numbersDay, setNumbersDay] = useState([]);
  const [monthName, setMonthName] = useState('');
  const firstDayOfMonthRef = useRef(null);
  

  // const daysLunch = ['02/11/2023','10/11/2023','20/11/2023'];
  
  // const [date, setDate] = useState(fechaDate(month, year));
  // const refs = useRef([]);

  const initializeCalendar = () => {
    // const date = fechaDate(month, year);
    setMonthName(new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date));
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let dias = [];
    let contador = 1;
    while (contador <= lastDayOfMonth.getDate()) {
      const fecha = `${contador.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
      const day = { number: contador, fecha: fecha, lunch: daysLunch.includes(fecha) }
      dias.push(day);
      contador++;
    }
    setNumbersDay(dias);
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
      <h2 className="calendario__mes__nombre">{monthName.toUpperCase()}</h2>
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
          <div ref={dayNumber.number === 1 ? firstDayOfMonthRef : null}
            onClick={handleClickDay} data-fecha={dayNumber.fecha}
            className="calendario__mes__dia"
            key={dayNumber.number}>
            {dayNumber.number} {dayNumber.lunch && <div className="calendario__mes__dia__almuerzo">
              <i className="fa-solid fa-utensils"></i></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
