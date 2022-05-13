import { ItemDetail } from "./ItemDetail";

import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import aros from "../SunStore/aros.jpg";
import { db } from "../firebase/firebase";
import { doc, getDocs, collection, query, where} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const {id} = useParams ()

    const productoCollection = collection(db, 'items')

    const getProducto = async () => {
      const data = await getDocs(productoCollection)
      const result = data.docs.map( doc => ({id: id, ...doc.data()}));
      const result_filter = result.filter(doc => doc.id == id)[0]
      console.log(result_filter)
      setProducto(result_filter)
    }

    useEffect ( () => {
      getProducto()
    }, [id])
   
    return (
        <ItemDetail producto={producto}  />
    )
};

export default ItemDetailContainer