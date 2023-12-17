import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

export const useApp = () => {
    const { openSidebar, setOpenSidebar,
            reserve, setReserve } = useContext(AppContext);

    const handleOpenOrCloseSidebar = () => {
        setOpenSidebar(!openSidebar);
    }
    
    const handleAddProductInReserve = (type, product, date) => {
        const products = reserve?.products;
        if (products == undefined) {
            setReserve({
                date: date,
                products: [product]
            })
            return true;
        }
        if(products.length > 0) {
            const productsFilter = products.filter(pro => pro.catproducto == type);
            if (productsFilter.length > 0) {
                if (productsFilter[0].idproducto === product.idproducto) {
                    const othersProducts = products.filter(pro => pro.idproducto !== product.idproducto);
                    setReserve({ ...reserve, products: othersProducts });
                    return false;
                }
                else {
                    return false;
                }
            } else {
                setReserve({ ...reserve, products: [...reserve.products, product] });
                return true;
            }
        } else {
            setReserve({
                date: date,
                products: [product]
            })
            return true;
        }s
    }

    return {
        openSidebar, handleOpenOrCloseSidebar,
        reserve, setReserve, handleAddProductInReserve
    }
}
