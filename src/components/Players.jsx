import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Player from './Player';
import { addPlayer } from '../actions/playerActions';

const mapStateToProps = ({ players }) => (
  { players }
);

const mapDispatchToProps = dispatch => (
  { addPlayer: () => dispatch(addPlayer()) }
);

const Players = (props) => {
  const { players, addPlayer } = props;
  return (
    <section className="players">
      {
        players.map((player, i) => <Player key={player} index={i} name={player} />)
      }
      <button type="button" onClick={addPlayer}>Add Player</button>
    </section>
  );
};

Players.propTypes = {
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  addPlayer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
