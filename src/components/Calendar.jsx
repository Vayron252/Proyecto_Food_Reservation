import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { getNameMonthLong, getFullDate, getLastDayOfMonth, getFormatDateSlash } from '../helpers/dateHelpers'
import '../styles/components.css'

export const Calendar = ({ month, year, today, daysLunch, programation, handleSelectDay }) => {
  const date = getFullDate(year, month, 1);
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  const monthName = getNameMonthLong(date);
  const calendarRef = useRef(null);
  const daysRefs = useRef([]);

  const [numbersDay, setNumbersDay] = useState([]);
  
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
    return !resultValidation;
  }

  const initializeCalendar = () => {
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
        lunch: daysLunch.filter(day => day.fecha === dateFormater).length > 0 ? true : false,
        disabled: isDisabledDay(dayCalendar)
      }
      days.push(day);
      counter++;
    }
    setNumbersDay(days);
  }

  useEffect(() => {
    initializeCalendar();
  }, [])

  useLayoutEffect(() => {
    if (daysRefs.current[`01/${month.toString().padStart(2, '0')}/${year}`]) {
      daysRefs.current[`01/${month.toString().padStart(2, '0')}/${year}`].style.gridColumn = `${date.getDay() + 1} / span 1`;
    }
  });

  const handleSelection = (element) => {
    handleSelectDay(daysRefs.current[element.getAttribute('data-date')]);
  }

  return (
    <div className="calendario__mes">
      <h2 className="calendario__mes__nombre">{`${monthName.toUpperCase()} - ${year}`}</h2>
      <div className="calendario__mes__semana">
        {daysOfWeek.map(dayName => (
          <div className="calendario__mes__semana__dia" key={dayName}>{dayName}</div>
        ))}
      </div>
      <div className="calendario__mes__dias" ref={calendarRef}>
        {numbersDay.map((dayNumber, i) => (
          <div disabled={dayNumber.disabled} 
            onClick={e => handleSelection(e.target)} data-date={dayNumber.date}
            className="calendario__mes__dia"
            ref={ref => (daysRefs.current[dayNumber.date] = ref)}
            key={dayNumber.number} >
            {dayNumber.number} 
            {dayNumber.lunch && <div className="calendario__mes__dia__almuerzo"><i className="fa-solid fa-utensils"></i></div>}
            {dayNumber.today && <div className="calendario__mes__dia__hoy"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
