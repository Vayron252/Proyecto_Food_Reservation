import { useEffect, useState, useRef } from "react"

const fechaDate = (month, year) => {
    const parts = (`${year}-${month.toString().padStart(2, '0')}-01`).split('-');
    const mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    return mydate;
  }

export const Calendario = ({ month, year }) => {
    const [numberDay, setNumberDay] = useState([]);
    const [monthName, setMonthName] = useState('');
  
    const initialDayOfMonthRef = useRef(null);
  
    const inicializarPage = () => {
      const date = fechaDate(month, year);
      setMonthName(new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(date));
      const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      let dias = [];
      let contador = 1;
      while(contador <= lastDayOfMonth.getDate()){
        dias.push(contador);
        contador ++;
      }
      setNumberDay(dias);
      initialDayOfMonthRef.current.style.gridColumn = `${date.getDay() + 1} / span 1`;
    }
  
    useEffect(() => {
      inicializarPage();
    }, [month, year])

  return (
    <div className="calendario__mes">
        <h2 className="calendario__mes__nombre">{monthName.toUpperCase()}</h2>
        <div className="calendario__mes__semana">
          <div className="calendario__mes__semana__dia">Dom</div>
          <div className="calendario__mes__semana__dia">Lun</div>
          <div className="calendario__mes__semana__dia">Mar</div>
          <div className="calendario__mes__semana__dia">Mie</div>
          <div className="calendario__mes__semana__dia">Jue</div>
          <div className="calendario__mes__semana__dia">Vie</div>
          <div className="calendario__mes__semana__dia">Sab</div>
        </div>
        <div className="calendario__mes__dias">
          <div ref={initialDayOfMonthRef} className="calendario__mes__dia" key={1}>1</div>
          {numberDay.map(day => (
            day !== 1 ? <div className="calendario__mes__dia" key={day}>{day}</div> : null
          ))}
        </div>
      </div>
  )
}
