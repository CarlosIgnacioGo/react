import React, { useContext, useState, useEffect }  from "react";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore"
import { Contexto } from "./CartContext";
import CartItem from "./CartItem";
import { Link} from "react-router-dom";
import { db } from "../firebase/firebase";

export const Cart = () => {

    const [idVenta, setIdVenta] = useState("")
    const { datos, clear } = useContext (Contexto);
    
    const finalizarCompra = (comprador) => {
        const ventasCollection = collection(db, "infoVenta");
        addDoc(ventasCollection, {
            comprador,
            items: datos,
            date: serverTimestamp(),
            total: total(),
        }) 
        .then(result => {
            setIdVenta(result.id);
        })
    }


    useEffect(()=>{
        
        

    }, []);


    const handlerClear = () =>{
        clear();
    }

    const handlerSubmit = (e) =>{
        const user_name = document.querySelector('#user_name').value
        const user_second_name = document.querySelector('#user_second_name').value
        const user_phone = document.querySelector('#user_phone').value
        const user_email = document.querySelector('#user_email').value
        const user_email_confirmed = document.querySelector('#user_email_confirmed').value

        if(user_name == "" || user_second_name == "" || user_phone == "" || user_email == "" || user_email_confirmed == ""){
            e.preventDefault();
            alert("Debe completar todos los datos")
        }else if(user_email != user_email_confirmed){
            e.preventDefault();
            alert("El email y su confirmación deben ser iguales")
        }else{
            const comprador = {
                nombre: user_name,
                apellido: user_second_name,
                phone: user_phone,
                email: user_email
            }
          
            finalizarCompra(comprador)
            console.log("holaaaa")
            console.log(idVenta)
        }
        
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
            <input type="text" id="user_name" placeholder="Nombre"></input>
            <input type="text" id="user_second_name" placeholder="Apellido"></input>
            <input type="text" id="user_phone" placeholder="Telefono"></input>
            <input type="emil" id="user_email" placeholder="Email"></input>
            <input type="emil" id="user_email_confirmed" placeholder="Confirma Email"></input>
            <button onClick={(e)=>handlerSubmit(e)} >Ingresar Pedido</button>
            <button onClick={handlerClear} >Limpiar</button>
        </div>
    )
}