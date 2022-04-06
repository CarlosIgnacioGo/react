import React from "react";
import { Item } from "./Item";

export const ItemList = (props) => {
    console.log(props.productos);
    return (
        <>
        {props.productos.map( (producto, index) => {
        return(
            <Item key={index} producto={producto} saludo="Hola" />
        )
        } )}
        </>
    )
}