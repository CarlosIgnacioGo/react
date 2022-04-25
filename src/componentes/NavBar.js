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

        <div className="navBar-styles">
            <NavLink to="/">
                <img src={logo} alt="logo"/>
            </NavLink>
            
            <nav className="barra-nav">
                
                {categorias.map((categoria)=>{
                    return(
                        <NavLink key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>
                    )
                })}

                <NavLink to="/carrito">
                    <CarWidget/>
                </NavLink>
            </nav>


            <h1>Sun Store</h1>
            <div>
            
            </div>
        </div>
    )
}

export default NavBar