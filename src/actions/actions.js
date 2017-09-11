import {createAction} from 'redux-actions';
import {Actions} from '../constants';

export const step = createAction(Actions.GAME_STEP, function (r, c){
    return {
        c: c, 
        r: r
    };
});

export const jumpTo = createAction(Actions.JUMP_TO, function (step){
    return step;
});