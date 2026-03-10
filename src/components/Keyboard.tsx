import { useEffect } from 'react'
import './Keyboard.css'

interface KeyboardProps {
  isOver: boolean
  keyboardStates: Record<string, string>
  onKeyPress: (key: string) => void
}

const KEYBOARD_ROWS = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['ENTER','Z','X','C','V','B','N','M','BACKSPACE']
]

const Keyboard = ({ isOver, keyboardStates, onKeyPress }: KeyboardProps) => {

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOver) return

      const key = event.key.toUpperCase()

      if (key === 'ENTER' || key === 'BACKSPACE' || /^[A-Z]$/.test(key)) {
        event.preventDefault()
        onKeyPress(key)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOver, onKeyPress])

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => {

            const state = keyboardStates[key] || ''

            return (
              <button
                key={key}
                className={`keyboard-key ${key === 'ENTER' || key === 'BACKSPACE' ? 'keyboard-key-wide' : ''} ${state}`}
                onClick={() => onKeyPress(key)}
              >
                {key === 'BACKSPACE' ? '⌫' : key}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Keyboard