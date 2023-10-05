import React from "react";
import { useNavigate } from "react-router-dom";
import{Button} from "@material-ui/core" 
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
            <Button variant='contained' color="primary" onClick={()=>goToContact()}> go to contact page</Button>
            <Button variant='contained' color="secondary" onClick={()=>goBack()}>go back</Button>
        </section>
    </>
    )
}
export default About;