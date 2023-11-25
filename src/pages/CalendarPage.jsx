import { useState } from "react";
import { Calendar } from "../components/Calendar";

export const CalendarPage = () => {
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
        setDaysLunch([...daysLunch, fecha]);
    }

    return (
        <>
            <button onClick={handleClick}>ClickMe!!!</button>
            <input type="text" onChange={e => setFecha(e.target.value)} value={fecha} />
            <div className="seccion__calendario contenedor">
                {meses.map((valor, index) => (
                    <Calendar key={index} month={valor.month} year={valor.year} daysLunch={daysLunch} setFecha={setFecha} />
                ))}
            </div>
        </>
    )
}
