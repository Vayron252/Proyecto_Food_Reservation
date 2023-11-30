import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
// import { SpinnerFoldingCube } from '../components/helpers/SpinnerFoldingCube'
import { ChargingScreen } from '../components/helpers/ChargingScreen'
import '../styles/main.css'

export const MainPages = () => {
    return (
        <main className="main">
            <div className="main__helper"></div>
            <Outlet />
        </main>
    )
}
