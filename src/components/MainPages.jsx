import { Outlet } from 'react-router-dom'
import '../styles/main.css'

export const MainPages = () => {
    return (
        <main className="main">
            <Outlet />
        </main>
    )
}
