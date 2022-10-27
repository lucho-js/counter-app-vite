import { useState } from "react";
import React from "react";
import  PropTypes  from "prop-types";
import Botones from "./Botones";
import Footer from "./Footer";

export const CounterApp = ({luciano,pepito}) => {

    const [counter, setCounter] = useState (luciano);
    const [ multi, setMulti] = useState (pepito);

    const handleChange = (val1) => {
        setCounter(val1 += counter)
    }

    const multiplicar = (val2) => {
        setMulti (val2 *= multi)
    }

    const fabrica = () => {
        setCounter (value);
    }

    if(counter<25){

        return (
            <>
        <h1>TitleCounterApp</h1>
        <h2> {counter} </h2>
        <Botones texto="+1" value={1} callback={handleChange} />
        <Botones texto="-1" value={-1} callback={handleChange} />
        <button onClick={fabrica}> Reset </button>

        -----------------------------------------------
    <h1>TitleMulti</h1>
    <h2>{multi}</h2>
    <Botones texto= "x2" value={2} callback={multiplicar}  />
    <Botones texto= "x4" value={4} callback={multiplicar}  />




        <Footer/>
    </>
) 
}else{
    return <div>llegaste a 10 pelotudo</div>
}

}

CounterApp.prototype = {
    
    value: PropTypes.number.isRequired


}