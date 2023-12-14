import { useState } from 'react'
import { useApp } from '../hooks/useApp';

export const ProductCard = ({ product, date }) => {
    const { idproducto, nomproducto, imgproducto, catproducto } = product;
    const [productSelec, setProductSelec] = useState(false);
    const { handleAddProductInReserve } = useApp();

    const handleSelec = () => {
        // setProductSelec(!productSelec)
        // const product = getProductInReserve(catproducto);
        // console.log(product);
        const product = { idproducto, nomproducto, catproducto }
        setProductSelec(handleAddProductInReserve(catproducto, product, date.replaceAll('-','/')));
    }

    return (
        <div className={`producto ${productSelec ? 'activo' : ''}`} onClick={handleSelec}>
            <div className="producto__contenedor__imagen">
                <img src={imgproducto} alt="imagen producto" className="producto__imagen" />
            </div>
            <p className="producto__nombre">{nomproducto}</p>
        </div>
    )
}
