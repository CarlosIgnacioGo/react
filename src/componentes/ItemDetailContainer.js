import { ItemDetail } from "./ItemDetail";
import {useEffect, useState} from 'react'

const productoInicial = {name: "Aros", valor: 1200, stock: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvLRskflHE7Z3BG1GnXWU4R2XRXTdolQgSw&usqp=CAU', detail: "Aros a la moda y a tu alcance"}

const promesaDetail = new Promise ( (resolve, reject) => {
    setTimeout(()=> {
        resolve(productoInicial);
    },4000)
});

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    
    useEffect ( () => {
        promesaDetail.then(()=>{
            setProducto(productoInicial);
        })
        promesaDetail.catch(()=>{
            console.log ("todo mal");
        })

    }, [])
   
    return (
        <ItemDetail producto={producto} />
    )
}