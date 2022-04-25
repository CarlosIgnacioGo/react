import React, {createContext, useState} from "react";

export  const Contexto = createContext(); 

const CustomProvider = ({children}) => {

    const [datos, setDatos] = useState ([])
    
    const [total, setTotal] = useState (0)

    const getId= (id) => datos.find(productos => productos.id === id) || null

    const addItem = (producto, cantidad) => {
        const productId = getId (producto.id)
        if (!productId) {
            producto.cantidad = cantidad
            setDatos([...datos, producto])
        }else {
            if (productId.cantidad + cantidad > productId.stock)
            return false
            productId.cantidad += cantidad
        }
        setTotal (total + cantidad)
        return true
    }

    console.log(datos);

    const removeItem = (id) => {
        const eliminar = datos.filter (e => e.id !== id)
        setDatos(eliminar);
    }

    const clear =()=> {
        setDatos([])
        setTotal(0)
    }
    



    return (
        <Contexto.Provider value={{datos, total, addItem, removeItem, clear}}>
            {children}
        </Contexto.Provider>
    )

}

export default CustomProvider
