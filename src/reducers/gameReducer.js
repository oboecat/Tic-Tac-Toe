import {handleActions} from 'redux-actions';
import {Actions} from '../constants';
import calculateWinner from '../helpers/calculateWinner';

/* Step 
    x: x coordinate
    y: y coordinate
    isX: if the symbol is X or Y
*/


function Step(isX, winner, squares) {
    return Object.freeze({ isX, winner, squares });
}

const defaultState = {
    stepIndex: 0,
    history: [{
        squares: [
            [null, null, null], 
            [null, null, null], 
            [null, null, null],
        ],
        winner: {
            line: null,
            value: 0
        },
        isX: true
    }],
};

function gameStep(game, action) {
    const step = action.payload;
    const {history, stepIndex} = game;
    const current = history[stepIndex];

    if (current.winner.value) {
        return game;
    }

    const newSquares = [...current.squares];
    newSquares[step.r] = [...newSquares[step.r]];
    newSquares[step.r][step.c] = current.isX ? 'X' : 'O';

    const newWinner = calculateWinner(newSquares);
    const newIsX = !current.isX;

    return {
        history: [
            ...(history.slice(0, stepIndex + 1)), 
            new Step(newIsX, newWinner, newSquares)
        ],
        stepIndex: stepIndex + 1,
    };
}

function jumpTo(game, action) {
    const stepIndex = action.payload;
    return {
        ...game,
        stepIndex: stepIndex
    };
}

export default handleActions({
    [Actions.GAME_STEP]: gameStep,
    [Actions.JUMP_TO]: jumpTo,
}, defaultState);
