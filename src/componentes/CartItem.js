import React from 'react';
import CartShow from './CartShow';



const CartItem = ({datos}) => {
    return (

    <div>
        {datos.map(producto => 
            <CartShow key={producto.id} datos={producto}/>
        )}
    </div>
    );
}; 

export default CartItem