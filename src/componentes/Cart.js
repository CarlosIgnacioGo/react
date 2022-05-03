import React, { useContext, useState, useEffect }  from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { Contexto } from "./CartContext";
import CartItem from "./CartItem";
import { db } from "../firebase/firebase";

export const Cart =() => {

    const [idVenta, setIdVenta] = useState("")

    const comprador = {
        nombre: "Luis",
        apellido: "soto",
        email: "lusoto@gmail.com",
    };


    useEffect(()=>{
        const finalizarCompra = () => {
            const ventasCollection = collection(db, "infoVenta");
            addDoc(ventasCollection, {
                comprador,
                items: [{nombre: "aji"},{nombre:"pera"}],
                date: serverTimestamp(),
                total: 100,
            }) 
            .then(result => {
                setIdVenta(result.id);
            })
        }
        finalizarCompra();

    }, []);


    


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