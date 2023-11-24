import { Calendario } from "./components/Calendario";
import "./app.css"

export const App = () => {
  const month = 11;
  const year = 2023;

  const meses = [
    {
      month: 7,
      year: 2023
    },
    {
      month: 9,
      year: 2023
    },
    {
      month: 11,
      year: 2023
    }
  ]

  return (
    <div className="contenedor">
      {meses.map((valor, index) => (
        <Calendario key={index} month={valor.month} year={valor.year} />
      ))}
    </div>
  )
}
