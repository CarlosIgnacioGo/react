import React, { useEffect, useState } from "react";
import NavBar from "./componentes/NavBar";
import './Header.css';
import logo from './img/logoSun.png';
import CarWidget from "./componentes/CarWidget";
import ItemListContainer from "./componentes/ItemListContainer";



const Header = () => {
    


    return (
        <>
        <img src={logo} alt="logo"/>
        <h1>Sun Store</h1>
        <div>
            <NavBar/>
        </div>
        <CarWidget/>

        < ItemListContainer />
        
        
        </>

        
    )
} 

export default Header