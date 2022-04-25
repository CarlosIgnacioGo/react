import React, { useContext }  from "react";
import { Contexto } from "./CartContext";
import CartItem from "./CartItem";

export const Cart =() => {

    const { datos, clear } = useContext (Contexto);

    const handlerClear = () =>{
        clear();
    }

    let suma = 0 

    const total = () => {
        suma = 0
        let subTotal = 0
        datos.forEach(element => {
            subTotal= element.cantidad * element.valor
            suma = suma+subTotal
        });
        return suma 
    }
        total();

    if (!datos.length){
        return (<div>
            <h1>No hay productos en el carrito</h1>
        </div>)
    }


    return (
        <div>
            <CartItem datos = {datos}/>
            <h1>Total {suma} </h1>
            <button onClick={handlerClear} >Limpiar</button>

        </div>
    )
}