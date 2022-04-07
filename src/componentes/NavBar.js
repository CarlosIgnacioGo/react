import React from "react";
import './NavBar.css';
import logo from "./../img/logoSun.png";
import CarWidget from "./CarWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    const categorias = [
        {name:"StrapPhone", route:"categories/strap", id: 1},
        {name:"Aros", route:"categories/aros", id: 2},
        {name:"Collares", route:"categories/collares", id: 3},
        {name:"Pulseras", route:"categories/pulseras", id: 4}
    ]

    return (

        <>
            <NavLink to="/">
                <img src={logo} alt="logo"/>
            </NavLink>
            
            <nav>
                
                {categorias.map((categoria)=>{
                    return(
                        <NavLink to={categoria.route}>{categoria.name}</NavLink>
                    )
                })}
            </nav>


            <h1>Sun Store</h1>
            <div>
            <NavLink to="/carrito">
                <CarWidget/>
            </NavLink>
            </div>
        </>
    )
}

export default NavBar