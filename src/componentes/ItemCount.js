import react, {useState } from "react";

export const ItemCount = ({stock, initial, onAdd}) => {

  const [contador, setContador]= useState(1);

  const handlerClick = () => {
    if (stock > initial && contador < stock) {
      setContador (contador + 1);
    }
  };

  const restador = () => {
    if (contador > initial) {
      setContador (contador - 1)  
    }
  };

  const addCart = () => {
    if (stock > 0 && contador > 0) {
      onAdd (contador);
    } else {
      console.log("Stock insuficiente");
    }
  };

  return (
    <>
    <h1>{contador}</h1>
    <button onClick={handlerClick}>Agregar</button>
    <button onClick={restador}>Quitar</button>
    <button onClick={addCart}>Añadir Carro</button>
    
    </>
  );
};