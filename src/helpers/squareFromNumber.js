export default function squareFromNumber(squares, n) {
    return squares[~~(n / 3)][n % 3];
}