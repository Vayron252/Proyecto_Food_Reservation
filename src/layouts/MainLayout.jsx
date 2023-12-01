import { MainFooter } from '../components/footers/MainFooter'
import { MainHeader } from '../components/headers/MainHeader'
import { MainPages } from '../components/mains/MainPages'
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
