import React from 'react';
import { connect } from 'react-redux';
import Board from '../Board';
import Status from '../Status';
import MovesList from '../MovesList';
import {step, jumpTo} from '../../actions/actions';

class Game extends React.Component {
  render() {
    const {
      current, 
      history, 
      handleClick,
      jumpTo
    } = this.props;
    const {winner} = current;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winner={winner}
            onClick={handleClick}
          />
        </div>
        <div className="game-info">
          <Status
            winner={winner.value}
            xIsNext={current.isX}
          />
          <MovesList 
            history={history}
            current={current}
            onClick={jumpTo}
          />
        </div>
      </div>
    );
  }
}


export default connect((state) => {
  const { game } = state;
  const { history, stepIndex } = game;

  return {
    current: history[stepIndex],
    history: history,
  }
}, (dispatch) => {
  return {
    handleClick: (r, c) => dispatch(step(r,c)),
    jumpTo: (step) => dispatch(jumpTo(step))
  }
})(Game);