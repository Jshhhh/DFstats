

const initialState = {
    players: [],
    heroes: ['Torm', 'Sir Moo', 'Goldfinga', 'Brockenstock', 'Murka Mistcleaver', 'Lady Mary', 'Lanky Lowshot', 'Aristide'],
};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return state;
        default:
            return state;
    }
};

export default rootReducer;