import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

export const useApp = () => {
    const navigate = useNavigate();
    const { openSidebar, setOpenSidebar,
            reserve, setReserve } = useContext(AppContext);

    const handleOpenOrCloseSidebar = () => {
        setOpenSidebar(!openSidebar);
    }

    const handleSaveReserve = async () => {
        fetch('https://apitestprueba-4fg7.onrender.com/reservas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fecha: reserve.date })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(setReserve({}))
        .then(navigate('/calendario'))
        .catch(error => console.error(error));
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
        }
    }

    return {
        openSidebar, handleOpenOrCloseSidebar,
        reserve, handleAddProductInReserve, handleSaveReserve
    }
}
