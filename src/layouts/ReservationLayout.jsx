import { ReservationFooter } from '../components/footers/ReservationFooter'
import { ReservationHeader } from '../components/headers/ReservationHeader'
import { MainPages } from '../components/mains/MainPages'
import { Sidebar } from '../components/Sidebar'
import { ScrollToTop } from '../components/helpers/ScrollToTop'

export const ReservationLayout = () => {
    return (
        <>
            <Sidebar />
            <ReservationHeader />
            <ScrollToTop />
            <MainPages />
            <ReservationFooter />
        </>
    )
}
