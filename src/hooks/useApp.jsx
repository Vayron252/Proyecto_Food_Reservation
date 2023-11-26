import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

export const useApp = () => {
    const { openSidebar, setOpenSidebar } = useContext(AppContext);

    const handleOpenOrCloseSidebar = () => {
        setOpenSidebar(!openSidebar);
    }

    return {
        openSidebar, handleOpenOrCloseSidebar
    }
}
