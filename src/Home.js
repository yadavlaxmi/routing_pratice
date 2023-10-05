import React from "react";
import Header from "./Component/Header"
import { Outlet } from "react-router-dom";

const Home=()=>{
    return(
    <> <h1>laxmi</h1>
        <Header/>
        <Outlet/>
    </>
    )
}
export default Home;