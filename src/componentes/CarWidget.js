import React, { useContext } from 'react';
import "./CarWidget.css";
import { Contexto } from "./CartContext";

import IconoCarro from '@mui/icons-material/ShoppingCart';


const CarWidget = () => {

    const {datos} = useContext(Contexto)

    return (
        
        <IconoCarro>
            <p>{datos.length}</p>
        </IconoCarro>

    );
}; 

export default CarWidget