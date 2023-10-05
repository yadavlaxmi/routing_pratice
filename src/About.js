import React from "react";
import { useNavigate } from "react-router-dom";
const About=()=>{
    const navigate = useNavigate();
     const goToContact =()=>{
        navigate("/Contact")
     }
     const goBack=()=>{
        navigate(-1)
     }
    return(
    <>
        <section>
            <h1>About page</h1>
            <button onClick={()=>goToContact()}> go to contact page</button>
            <button onClick={()=>goBack()}>go back</button>
        </section>
    </>
    )
}
export default About;