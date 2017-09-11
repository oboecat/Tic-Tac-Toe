
function Enum(...args) {
    var obj = {};
    for (let key of args) {
        obj[key] = key;
    }
    return obj;
}

export const Actions = Enum(
    'GAME_STEP',
    'JUMP_TO',
);
