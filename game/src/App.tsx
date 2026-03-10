import { useEffect, useState } from 'react'
import './App.css'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import { getKeyboardStates } from './utils.ts'
import { getWord } from './word.ts'

function App() {
  const [guesses, setGuesses] = useState<string[]>([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [solution, setSolution] = useState('')
  const [isOver, setIsOver] = useState(false)

  useEffect(() => {
    const fetchWord = async () => {
      const word = await getWord()
      if (word) setSolution(word.toUpperCase())
    }
    fetchWord()
  }, [])

const handleKeyPress = (key: string) => {
  if (isOver) return

  if (key === 'ENTER') {
    if (currentGuess.length !== 5) return

    setGuesses(prev => [...prev, currentGuess])

    if (currentGuess === solution) {
      setTimeout(() => {
        alert('¡Ganaste!')
      }, 300)

      setIsOver(true)
    }

    if (guesses.length === 5 && currentGuess !== solution) {
      setTimeout(() => {
        alert(`Perdiste. La palabra era ${solution}`)
      }, 300)

      setIsOver(true)
    }

    setCurrentGuess('')
    return
  }

  if (key === 'BACKSPACE') {
    setCurrentGuess(prev => prev.slice(0, -1))
    return
  }

  if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
    setCurrentGuess(prev => prev + key)
  }
}

  const keyboardStates = getKeyboardStates(guesses, solution)

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Grid 
        guesses={guesses} 
        currentGuess={currentGuess} 
        solution={solution} 
      />
      <Keyboard
        isOver={isOver}
        onKeyPress={handleKeyPress}
        keyboardStates={keyboardStates}
      />
    </div>
  )
}

export default App