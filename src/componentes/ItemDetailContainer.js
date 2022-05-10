import { ItemDetail } from "./ItemDetail";

import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import aros from "../SunStore/aros.jpg";
import { db } from "../firebase/firebase";
import { doc, getDocs, collection, query, where} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const {id} = useParams ()

    /*let test = db.collection('items')
    .doc(id)
     .get()
     .then(doc=>{
      const data = doc.data();
                
    });*/
    

    useEffect ( () => {
        console.log("esto es:", id);
      

        /*collection(db,'items').where("id", '==', id)
        .get()
        .then((querySnapshot) => {
            console.log("la consulta es:", querySnapshot);
          querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
          });
        });*/
        
        /*const productosCollection = collection(db, `items`).where("id",id)
        getDocs(productosCollection)
        .then((result) => {
            console.log("result es:", result)
            const docs = result.docs;

            
        })
        console.log("produc:", productosCollection);*/
        

        /*console.log("el id es:", id)
        const productosCollection = collection(db, "items").doc(id)
        getDocs(productosCollection)
        .then((result) => {
        console.log("resultado es:", result)
            
        })*/

        
        //console.log("el producto es: ", productsCollection)
        //const ref = doc(productsCollection,id)
        
    
        // const hola = productsCollection.doc(id)
        //  getDoc(ref)
        // .then((result)=>{
        //      console.log(result.data())
        //  setProducto(result.data());
        // })

        // const productsCollection = collection(db, "items");
        // const ref = doc(productsCollection,id)
        // getDoc(ref)
        // .then((result)=>{
        //     setProducto(result.data());
        // })



        // promesaDetail
        // .then((producto) => {
        //     console.log("estoy aqui" + id)
        //     if (id) {
        //         console.log(typeof id)
                
        //         setProducto(producto.find(el => el.id === id));
        //         console.log ("Estos son los:" +producto );
        //     }else{
        //         setProducto ("No existe")
        //     }
        // }) 

    }, [id])
   
    return (
        <ItemDetail producto={producto}  />
    )
};

export default ItemDetailContainer