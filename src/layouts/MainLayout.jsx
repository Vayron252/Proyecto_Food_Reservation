import { MainFooter } from '../components/MainFooter'
import { MainHeader } from '../components/MainHeader'
import { MainPages } from '../components/MainPages'

export const MainLayout = () => {
  return (
    <>
        <MainHeader />
        <MainPages />
        <MainFooter />
    </>
  )
}
