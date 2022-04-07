import React from "react";
import { Item } from "./Item";
import './ItemList.css'

export const ItemList = (props) => {
    console.log(props.productos);
    return (
        <>
        <div className="contenedor-de-todos-productos">
            {props.productos.map( (producto, index) => {
                return(
                    <Item key={index} producto={producto} saludo="Hola" />
                )
            } )}
        </div>
        
        </>
    )
}