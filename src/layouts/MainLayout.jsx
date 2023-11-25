import { Outlet } from 'react-router-dom'
import { MainFooter } from '../components/MainFooter'

export const MainLayout = () => {
  return (
    <>
        <h2>Este el el layout</h2>

        <Outlet />
        <MainFooter />
    </>
  )
}
