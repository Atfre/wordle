import './Grid.css'
import { getLetterStates } from '../utils.ts'

const rows = 6
const columns = 5

interface GridProps {
  guesses: string[]
  currentGuess: string
  solution: string
}

const Grid = ({ guesses, currentGuess, solution }: GridProps) => {
  const allGuesses = [...guesses]

  if (currentGuess) {
    allGuesses.push(currentGuess)
  }

  while (allGuesses.length < rows) {
    allGuesses.push('')
  }

  return (
    <div className="grid">
      {allGuesses.map((guess, rowIndex) => {
        const isComplete = guesses.length > rowIndex
        const states = isComplete
          ? getLetterStates(guess, solution)
          : Array(columns).fill('')

        return (
          <div key={rowIndex} className="row">
            {Array(columns).fill('').map((_, colIndex) => {
              const letter = guess[colIndex] || ''
              const letterState = states[colIndex]

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`cell cell-${letterState}`}
                >
                  {letter}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Grid