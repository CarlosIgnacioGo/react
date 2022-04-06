import React from "react";
import "./ItemListContainer.css"
import { ItemCount } from "./ItemCount";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

const productosIniciales = [
    {name: "Aros", valor: 1200, stock: 5},
    {name: "StrapPhone", valor: 2200, stock: 10},
    {name: "Pulseras", valor: 1500, stock: 5},
    {name: "Collares", valor: 2000, stock: 5}
]

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState ([])

    const promesa = new Promise ( (resolve, reject) => {
        
        setTimeout(()=> {
            resolve(productosIniciales);
            
        },2000)
    });


    useEffect ( () => {
    
        promesa.then(()=>{
        setProductos (productosIniciales);
        console.log("Todo bien");
        console.log (productos);
        })
        promesa.catch(()=>{
            console.log ("todo mal");
        })

    }, [])



    let stock = 10;
    let initial= 1;

    const onAdd = (contador) =>{
        console.log ( `producto agregado ${contador} a carrito`);
    }

    
    return (
        <>
        <h1>{props.saludo}</h1>
        < ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        < ItemList productos={productos}/>
        </>

    )

}




export default ItemListContainer