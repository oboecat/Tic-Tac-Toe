import squareFromNumber from './squareFromNumber';

export default function checkLine(squares, line) {
    const [a, b, c] = line;
    const ghettoBoundSquareFromNumber = (block) => squareFromNumber(squares, block);
    if (
        ghettoBoundSquareFromNumber(a) &&
        ghettoBoundSquareFromNumber(a) === ghettoBoundSquareFromNumber(b) &&
        ghettoBoundSquareFromNumber(a) === ghettoBoundSquareFromNumber(c)
    ) {
        return squareFromNumber(squares, a);
    }
    return null;
}