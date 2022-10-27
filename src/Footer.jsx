import React from "react";
import Botones from "./Botones";


const Footer=()=>{

    const muestroMiNombre=(value)=>{
        alert("Mi nombre es"+value)
    }

    return(
        <div><Botones texto={"Hola"} value={"Luciano"} callback={muestroMiNombre}/></div>
    )
}


export default Footer;