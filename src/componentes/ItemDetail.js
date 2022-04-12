import './ItemDetail.css';
import { useState } from 'react';
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({producto}) => {

    const [cart, setCart] = useState (false);

    const onAdd = (contador) => {
        setCart(producto);
        alert (`agregaste ${contador} elementos al carro`);
    }
   
    return (
        <div>

            <img src={producto.img} />
            <h1>{producto.name}</h1>
            <p>{producto.valor}</p>
            <p>{producto.stock}</p>
            <p>{producto.detail}</p>
            {!cart ?
            < ItemCount stock={producto.stock} initial= {1} onAdd={onAdd} />:
            < Link to= "/cart"> <button>Terminar Compra </button> </Link>}
            
        </div>
    )
}