import React from 'react';
import { connect } from 'react-redux';

import Player from './Player';

import { addPlayer } from '../actions/playerActions';

const mapStateToProps = ({ players }) => {
    return {
        players
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: () => dispatch(addPlayer()),
    }
};

const Players = props => {
    return (
        <section className="players">
            {
                props.players.map((player, i) => <Player key={i} index={i} name={player}></Player>)
            }
            <button onClick={props.addPlayer}>Add Player</button>
        </section>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);