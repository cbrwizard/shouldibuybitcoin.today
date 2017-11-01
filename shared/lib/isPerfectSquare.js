/**
 * Returns boolean depending on if a number is a perfect square.
 */
const isPerfectSquare = (number) => {
  if (number === 0) {
    return true
  }
  return number % Math.sqrt(number) === 0
}

export default isPerfectSquare
