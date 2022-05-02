import { useState } from "react"

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState("") //Se actualiza con cada enter
    const [guesses, setGuesses] = useState([]) //Cada guess es un array
    const [history, setHistory] = useState([]) //Cada guess es un string
    const [isCorrect, setIsCorrect] = useState(false)

    //Formatea un guess [{letra: 'a', color: 'yellow'}]
    const formatGuess = () => {

    }

    const addNewGuess = () => {

    }

    const handleKeyUp = ({key}) => {
        if (key === "Backspace") {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        //Testeo que la tecla presionada sea una letra
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 6) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    //Las llamamos desde afuera, por eso las devuelvo
    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle