import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

export const useApp = () => {
    const { openSidebar, setOpenSidebar,
            reserve, setReserve } = useContext(AppContext);

    const handleOpenOrCloseSidebar = () => {
        setOpenSidebar(!openSidebar);
    }

    const handleSaveReserve = (product) => {
        
    }

    const getProductInReserve = (type) => {
        let products = reserve?.productos;
        if (products == undefined) {
            products = null;
        }
        return products;
    }

    return {
        openSidebar, handleOpenOrCloseSidebar,
        reserve, getProductInReserve
    }
}
