import React from 'react';
import { connect } from 'react-redux';

import Players from './Players'
import { ADD_PLAYER, addPlayer } from '../actions/playerActions';
import './App.scss';

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: () => dispatch(addPlayer()),
    }
};

const App = (props) => {
    return (
        <section className="main-sec">
            <h1>DF Stats</h1>
            <Players></Players>
            <button onClick={props.addPlayer}>Add Player</button>
        </section>
    )
};

export default connect(mapDispatchToProps)(App);