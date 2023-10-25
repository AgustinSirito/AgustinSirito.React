import { useState } from "react"
import React from 'react';


const Contador = () => {

    const[contador, setContador] = useState(1)

    const suma = () => {
        setContador(contador + 1)
    }

    const resta = () => {
        // setContador(contador - 1)
        contador > 1 && setContador(contador - 1)
    }

    const setTo0 = () => {
        setContador(1)
    }

    return(
        <>
        <button onClick={resta}>-</button>
        <p>{contador}</p>
        <button onClick={suma}>+</button>
        <button onClick={setTo0}>reset</button>
        </>
    )
}

export default Contador