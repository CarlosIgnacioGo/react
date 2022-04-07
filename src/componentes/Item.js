import React from "react";
import "./Item.css"

export const Item = (props) => {

    return(
        <>
            <div className="container-item-detail">
                
                <div>
                    <img className="img-producto" src={props.producto.img}/>
                    <p>{props.producto.name}</p>
                    <p> Valor: {props.producto.valor}</p>
                    <p> Stock: {props.producto.stock}</p>
                    <a href="/" className="btn-ver-detalle">Ver Detalle</a>
                </div>

            </div>
        </>
    )
}