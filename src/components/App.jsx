import React from 'react';
import Player from './Player';

const players = ['Justin', 'A', 'B']

const App = () => {
    return (
        <div>
            <h1>DF Stats</h1>
            {
                players.map((player, i) => <Player key={i} name={player}></Player>)
            }
            <button>Add Player</button>
        </div>
    )
};

export default App;