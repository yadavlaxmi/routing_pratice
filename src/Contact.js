import React from "react";
import { useNavigate } from "react-router-dom";
import{Button} from "@material-ui/core" 

const Contact=()=>{
    const navigate=useNavigate();
    const gotohome=()=>{
        navigate("/")
    }
    return(
    <>
        
        <section>
            <h1>Contact page</h1>
            <Button variant='contained' color="primary" onClick={gotohome}>go to home page</Button>
        </section>
    </>
    )
}
export default Contact;