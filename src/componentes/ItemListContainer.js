import React from "react";
import "./ItemListContainer.css"
import { getDocs, collection, query } from "firebase/firestore";
import { ItemCount } from "./ItemCount";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import strap1 from "../SunStore/strap.jpg";
import { db } from "../firebase/firebase";


const productosIniciales = [
    {id: 1, name: "Aros", valor: 1200, stock: 5, img: "https://cdn.shopify.com/s/files/1/1939/5891/products/argollas-xl_-cuff-circon-y-victoria_946ec432-601a-401a-bc32-859dd6233dad_1200x1200.jpg?v=1628706583"},
    {id: 2, name: "StrapPhone", valor: 2200, stock: 10, img: strap1},
    {id: 3, name: "Pulseras", valor: 1500, stock: 5, img: "https://www.dhresource.com/0x0/f2/albu/g14/M00/77/88/rBValV9gV9KARkk1AAJTWfW-LmM356.jpg/yoga-rope-bracelet-7colors-buddha-prayer.jpg"},
    {id: 4, name: "Collares", valor: 2000, stock: 5, img: "https://www.metalreci.cl/77052/6_picture-pictures/Makersland-lindo-shell-collar-para-ni%C3%B1os-de-dibujos.jpeg"}
]

const ItemListContainer = (props) => {

    console.log(db);

    const [productos, setProductos] = useState ([])

    const promesa = new Promise ( (resolve, reject) => {
        
        setTimeout(()=> {
            resolve(productosIniciales);
            
        },200)
    });


    useEffect ( () => {
        
        const productosCollection = collection (db, "items")
        const quet = query(productosCollection )
        getDocs(productosCollection)
        .then((result)=>{
            const docs = result.docs;
            const lista = docs.map ( producto => {
                const id = producto.id
                const product = {
                    id,
                    ...producto.data()
                }
                return product;
            })
            setProductos(lista);
        })
        .catch(error => {console.log(error)})
        .finally(()=> {
            
        })
    




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