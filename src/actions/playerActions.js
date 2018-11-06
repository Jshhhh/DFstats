const ADD_PLAYER = 'ADD_PLAYER';
const CHANGE_NAME = 'CHANGE_NAME';

const addPlayer = () => {
    return {
        type: ADD_PLAYER,
    }
};

const changeName = (id, name) => {
    return {
        type: CHANGE_NAME,
        payload: {
            id,
            name
        },
    }
}

module.exports = {
    ADD_PLAYER,
    addPlayer,
    CHANGE_NAME,
    changeName
};
