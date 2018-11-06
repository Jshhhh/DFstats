import React from 'react';
import { connect } from 'react-redux';

import Player from './Player';

const mapStateToProps = ({ players }) => {
    return {
        players
    }
}

const Players = props => {
    return (
        <section className="players">
            {
                props.players.map((player, i) => <Player key={i} index={i} name={player}></Player>)
            }
        </section>
    );
};


export default connect(mapStateToProps)(Players);