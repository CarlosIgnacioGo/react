import React, { useContext } from 'react';
import { Contexto } from "./CartContext";


const CartShow = ({datos}) => {

const { removeItem } = useContext (Contexto);

const eliminarProduct = () => {
    removeItem(datos.id);
}
    return (
        
        <div>
            <img className="img-producto" src={datos.image}/>
            <p>{datos.name}</p>
            <p> Valor: {datos.valor}</p>
            <p> Stock: {datos.stock}</p>
            <p> Cantidad: {datos.cantidad}</p>
            <p>Subtotal: {datos.valor * datos.cantidad} </p>
            <button onClick={eliminarProduct}>Sacar producto</button>


        </div>

    );
}; 

export default CartShow