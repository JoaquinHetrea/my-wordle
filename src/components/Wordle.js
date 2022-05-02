import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

export default function Wordle({ solution }){
    const {currentGuess, handleKeyUp } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        //Evita que haya muchos event listeners iguales?
        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])

    return (
        <div>Current Guess: { currentGuess }</div>
    )
}