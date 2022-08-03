import { useState } from 'react'

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('') // Se actualiza con cada enter
  const [guesses, setGuesses] = useState([...Array(6)]) // Cada guess es un array
  const [history, setHistory] = useState([]) // Cada guess es un string
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys, setUsedKeys] = useState({})

  // Formatea un guess [{letra: 'a', color: 'yellow'}]
  const formatGuess = () => {
    console.log('formateando guess:', currentGuess)
    const solutionArray = [...solution]

    const formatGuessArray = [...currentGuess].map((letter) => {
      return { key: letter, color: 'grey' }
    })

    formatGuessArray.forEach((value, index) => {
      if (solutionArray[index] === value.key) {
        value.color = 'green'
        solutionArray[index] = null
      }
    })

    formatGuessArray.forEach((value, index) => {
      if (solutionArray.includes(value.key) && value.color !== 'green') {
        formatGuessArray[index].color = 'yellow'
        solutionArray[solutionArray.indexOf(value.key)] = null
      }
    })

    return formatGuessArray
  }

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }

    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess]
    })

    setTurn(prevTurn => {
      return prevTurn + 1
    })

    setCurrentGuess('')

    setUsedKeys(prevUsedKeys => {
      const newKeys = { ...prevUsedKeys }

      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key]

        if (letter.color === 'green') {
          newKeys[letter.key] = 'green'
        } else if (letter.color === 'yellow' && currentColor !== 'green') {
          newKeys[letter.key] = 'yellow'
        } else if (letter.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
          newKeys[letter.key] = 'grey'
        }
      })

      return newKeys
    })
  }

  const handleKeyUp = ({ key }) => {
    console.log('key:', key)

    if (key === 'Enter') {
      if (turn > 6) {
        console.log('Ya perdiste')
        return
      }

      if (history.includes(currentGuess)) {
        console.log('Ya intentaste esa palabra')
        return
      }

      if (currentGuess.length !== 6) {
        console.log('La palabra debe ser de 6 letras')
        return
      }

      const formatted = formatGuess()
      addNewGuess(formatted)
    }

    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })
      return
    }

    // Testeo que la tecla presionada sea una letra
    if (/^[A-Za-z-ñ]$/.test(key)) {
      if (currentGuess.length < 6) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
  }

  // Las llamamos desde afuera, por eso las devuelvo
  return { turn, history, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp }
}

export default useWordle
