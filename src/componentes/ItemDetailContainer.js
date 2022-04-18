import { ItemDetail } from "./ItemDetail";
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const productoInicial = [
        {id: "1", name: "Aros", valor: 1200, stock: 5, img: "https://cdn.shopify.com/s/files/1/1939/5891/products/argollas-xl_-cuff-circon-y-victoria_946ec432-601a-401a-bc32-859dd6233dad_1200x1200.jpg?v=1628706583"},
        {id: "2", name: "StrapPhone", valor: 2200, stock: 10, img: "https://www.latercera.com/resizer/ptrn17t6S6kqD-eECpLWhbIC1Ng=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/EK6HLAHRDVFIPAMBWQXOEUZBVY.jpg"},
        {id: "3", name: "Pulseras", valor: 1500, stock: 5, img: "https://www.dhresource.com/0x0/f2/albu/g14/M00/77/88/rBValV9gV9KARkk1AAJTWfW-LmM356.jpg/yoga-rope-bracelet-7colors-buddha-prayer.jpg"},
        {id: "4", name: "Collares", valor: 2000, stock: 5, img: "https://www.metalreci.cl/77052/6_picture-pictures/Makersland-lindo-shell-collar-para-ni%C3%B1os-de-dibujos.jpeg"}
    ]

    const {id} = useParams ()

    const promesaDetail = new Promise ( (resolve, reject) => {
        setTimeout(()=> {
            resolve(productoInicial);
        },4000)
    });


    
    useEffect ( () => {
        promesaDetail
        .then((producto) => {
            console.log("estoy aqui" + id)
            if (id) {
                console.log(typeof id)
                
                setProducto(producto.find(el => el.id === id));
                console.log ("Estos son los:" +producto );
            }else{
                setProducto ("No existe")
            }
        })

    }, [id])
   
    return (
        <ItemDetail producto={producto}  />
    )
};

export default ItemDetailContainer