import React from 'react';

export default function Status(props) {
    let status;
    if (props.winner) {
        status = 'Winner: ' + props.winner;
    } else {
        status = 'Next player: ' + (props.xIsNext ? 'X' : 'O');
    }
    return <div>{status}</div>;
}