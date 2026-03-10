export const getWord = async (): Promise<string> => {
  try {
    const response = await fetch(
      'https://random-word-api.herokuapp.com/word?length=5'
    )

    const [word] = await response.json()
    return word.toUpperCase();
  } catch (e) {
    console.error('Error fetching word:', e)
    return ''
  }
}