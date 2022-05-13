import './ItemDetail.css';
import { useState, useContext } from 'react';
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';
import { Contexto } from './CartContext';

export const ItemDetail = ({producto}) => {

    const {addItem} = useContext(Contexto)

    const [cart, setCart] = useState (false);

    const onAdd = (contador) => {
        setCart(producto);
        alert (`agregaste ${contador} elementos al carro`);
        addItem (producto, contador);
    }

   
    return (
        <div>

            <img src={producto.image} />
            <h1>{producto.name}</h1>
            <p>{producto.category}</p>
            <p>{producto.valor}</p>
            <p>{producto.stock}</p>
            <p>{producto.detail}</p>
            {!cart ?
            < ItemCount stock={producto.stock} initial= {1} onAdd={onAdd} />:
            < Link to= "/cart"> <button>Terminar Compra </button> </Link>}
            
        </div>
    )
}