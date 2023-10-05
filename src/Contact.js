
import React from "react";
import {NavLink} from "react-router-dom";
const Contact=()=>{
    return(
        <>
        <header>
        <a href="#">logo</a>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact"> MY Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    <section>
        <h1>contact page</h1>
    </section>
    </>
    )
} 
export default Contact;