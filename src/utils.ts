export const getLetterStates = (
  guess: string,
  solution: string
): string[] => {

  if (!guess || !solution) {
    return Array(5).fill('')
  }

  const states: string[] = Array(5).fill('absent')
  const solutionChars = solution.split('')
  const guessChars = guess.split('')

  guessChars.forEach((char, i) => {
    if (char === solutionChars[i]) {
      states[i] = 'correct'
      solutionChars[i] = ''
    }
  })

  guessChars.forEach((char, i) => {
    if (states[i] === 'correct') return

    const index = solutionChars.indexOf(char)
    if (index !== -1) {
      states[i] = 'present'
      solutionChars[index] = ''
    }
  })

  return states
}

export const getKeyboardStates = (
  guesses: string[],
  solution: string
): Record<string, string> => {

  const keyStates: Record<string, string> = {}

  guesses.forEach((guess) => {
    const states = getLetterStates(guess, solution)

    guess.split('').forEach((letter, i) => {
      const currentState = keyStates[letter]
      const newState = states[i]

      if (currentState === 'correct') return
      if (currentState === 'present' && newState === 'absent') return

      keyStates[letter] = newState
    })
  })

  return keyStates
}