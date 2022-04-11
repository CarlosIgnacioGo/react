import React, { Link} from "react-router-dom";
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
                    < Link to={`/detail/${props.producto.id}`}>
                        <button>Detalles</button>
                    </Link> 
                </div>

            </div>
        </>
    )
}