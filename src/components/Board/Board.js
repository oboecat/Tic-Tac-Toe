import React from 'react';
import Square from '../Square';

export default function Board(props) {
  const winner = props.winner;

  const board = props.squares.map((row, i) => {
    row = row.map((square, j) => {
      let cellType = '';
      if(winner.value) {
        for(let a = 0; a < winner.line.length; a++) {
          if (winner.line[a].r === i && winner.line[a].c === j) {
            cellType = 'winning-cell';
            break;
          }
        }
      }

      return <Square
          value={square}
          cellType={cellType}
          onClick={() => props.onClick(i, j)}
          key={j}
      />;
    });
    return <div className="board-row" key={i}>{row}</div>
  });
  return <div>{board}</div>;
}