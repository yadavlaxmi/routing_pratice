import React from "react";
import { useNavigate } from "react-router-dom";

const Contact=()=>{
    const navigate=useNavigate();
    const gotohome=()=>{
        navigate("/")
    }
    return(
    <>
        
        <section>
            <h1>Contact page</h1>
            <button onClick={gotohome}>go to home page</button>
        </section>
    </>
    )
}
export default Contact;