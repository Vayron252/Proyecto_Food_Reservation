import { useState } from 'react'
import vasomaracuya from '../img/vaso_maracuya.png'

export const ProductCard = ({ product }) => {
    const { idproducto, nomproducto, imgproducto, catproducto } = product;
    const [productSelec, setProductSelec] = useState(false);

    const handleSelec = () => {
        setProductSelec(!productSelec)
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
