import { MainFooter } from '../components/MainFooter'
import { MainHeader } from '../components/MainHeader'
import { MainPages } from '../components/MainPages'
import { Sidebar } from '../components/Sidebar'
import { ScrollToTop } from '../components/helpers/ScrollToTop'

export const MainLayout = () => {
  return (
    <>
        <Sidebar />
        <MainHeader />
        <ScrollToTop />
        <MainPages />
        <MainFooter />
    </>
  )
}
