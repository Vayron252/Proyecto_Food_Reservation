import { useNavigate } from 'react-router-dom'
import '../../styles/header.css'

export const ReservationHeader = () => {
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  }

  return (
    <div className="header">
      <button className="" onClick={handleBackPage}>Atras</button>
    </div>
  )
}
