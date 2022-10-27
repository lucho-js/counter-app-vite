import React from "react";

const Botones=({texto, value, callback})=>{
    return(
        <button onClick={()=> callback(value) }>{texto}</button>
    )
}

export default Botones;