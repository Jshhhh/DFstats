import { ADD_PLAYER, CHANGE_NAME } from '../actions/playerActions';
import * as heroList from '../heroes.json';

const initialState = {
    players: ['Player1', 'Player2', 'Player3'],
    playerCount: 3,
    heroes: heroList.default,
    filteredHeroes: [],
    data: [
      {
          name: 'Player1',
          data: [{cat: 'DPS', val: 4},{cat: 'Hit%', val: .5}, { cat: 'Special%', val: .2}]
      },
      {
          name: 'Player2',
          data: [{cat: 'DPS', val: 8},{cat: 'Hit%', val: .9}, { cat: 'Special%', val: .5}]
      }
    ]
};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PLAYER:
            let newPlayerCount = state.playerCount + 1;
            if (newPlayerCount < 7) {
                return {
                    ...state,
                    players: [...state.players, 'Player' + newPlayerCount],
                    playerCount: newPlayerCount
                };
            } else return state;
        case CHANGE_NAME:
            let newPlayerName = state.players;
            newPlayerName[action.payload.id] = action.payload.name;
            
            return {
                ...state,
                players: newPlayerName
            }
        default:
            return state;
    }
};

export default rootReducer;