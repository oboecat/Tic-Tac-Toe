import checkLine from './checkLine';
import coordinatesFromNumber from './coordinatesFromNumber';

export default function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ].map(line => line.map((n) => coordinatesFromNumber(n)));
  
  const winner = {
    value: null,
    line: null,
  }

  for (let i = 0; i < lines.length; i++) {
    winner.value = checkLine(squares, lines[i]);
    if (winner.value) {
      winner.line = lines[i];
      break;
    }
  }
  return winner;
}