import React from 'react';
import Square from '../Square';

export default function Board(props) {
    const board = props.squares.map((row, i) => {
      row = row.map((square, j) => {
        return <Square
           value={square}
           onClick={() => props.onClick(i, j)}
           key={j}
        />;
      });
      return <div className="board-row" key={i}>{row}</div>
    });
    return <div>{board}</div>;
}