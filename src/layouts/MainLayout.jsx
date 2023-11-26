import { MainFooter } from '../components/MainFooter'
import { MainHeader } from '../components/MainHeader'
import { MainPages } from '../components/MainPages'
import { Sidebar } from '../components/Sidebar'

export const MainLayout = () => {
  return (
    <>
        <Sidebar />
        <MainHeader />
        <MainPages />
        <MainFooter />
    </>
  )
}
