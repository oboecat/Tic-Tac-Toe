export default function checkLine(squares, line) {
    let [a, b, c] = line;
    if (squares[a.r][a.c] &&
        squares[a.r][a.c] ===  squares[b.r][b.c] &&
        squares[a.r][a.c] === squares[c.r][c.c]
    ) {
        return squares[a.r][a.c];
    }
    return null;
}