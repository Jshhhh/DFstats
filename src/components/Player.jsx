import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import { changeName } from '../actions/playerActions';

import './Player.scss';

const mapStateToProps = ({ heroes }) => (
  { heroes }
);

const mapDispatchToProps = dispatch => (
  { changeName: (id, name) => dispatch(changeName(id, name)) }
);

class Player extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    changeName: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    heroes: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  constructor(props) {
    super(props);
    const { name } = this.props;
    this.state = {
      player: name,
      inputName: name,
      selectedHero: 'Torm',
      isEye: false,
      dmg: 0,
      editing: false,
    };
  }

    //  changes name tag to input tag
    editName = () => {
      this.setState({ editing: true });
    }

    handleFocus = (e) => {
      e.target.select();
    }

    //  changes player name
    handleName = (e) => {
      this.setState({ inputName: e.target.value });
    }

    //  changes name input to p tag
    submitName = (e) => {
      if (e.keyCode === 13) {
        const { inputName } = this.state;
        const { changeName, index } = this.props;
        this.setState({ editing: false, player: inputName });
        changeName(index, e.target.value);
      } else if (e.keyCode === 27) {
        this.setState({ editing: false });
      }
    }

    //  handle select for heroes
    handleSelect = (e) => {
      this.setState({ selectedHero: e.target.value });
    }

    //  handle input value for dmg
    handleDmgInput = (e) => {
      const newValue = e.target.value > 50 ? 50 : e.target.value;
      // if (this.state.dmg !== 0 && e.target.value === 0) {

      // }
      this.setState({ dmg: newValue });
    }

    //  handles if eye boolean
    handleIsEye = () => {
      this.setState(state => ({ isEye: !state.isEye }));
    }

    //  handle submit data
    submitData = () => {
      const { player, selectedHero, dmg, isEye } = this.state;
      axios({ method: 'post', url: '/submit', 'Content-Type': 'application/json', data: { player, selectedHero, dmg, isEye } })
        .then(res => console.log('successful submission', res))
        .catch(err => console.error('unsuccessful submission, try again', err));
    }

    render() {
      const strokeColors = ['red', 'blue', 'purple', 'green', 'yellow', 'orange', 'pink'];
      const { editing, inputName, selected, player, dmg } = this.state;
      const { heroes } = this.props;
      return (
        <div className="player">
          {
            editing ?
              (
                <input
                  className="editName"
                  value={inputName}
                  type="text"
                  onChange={this.handleName}
                  onKeyUp={this.submitName}
                  onFocus={this.handleFocus}
                />
              ) :
                <p className="player-name" style={{ color: strokeColors }} onDoubleClick={this.editName}>{player}</p>
          }
          <select className="selectChar" onChange={this.handleSelect} value={selected}>
            <option hidden>Select Hero</option>
            {heroes.map(char => <option key={char}>{char}</option>)}
          </select>
          <span>DMG:</span>
          <input className="inputDMG" onChange={this.handleDmgInput} value={dmg} min={0} max={50} type="number" />
          <div className="eyeInput">
            <span>Special:</span>
            <input type="checkbox" onChange={this.handleIsEye} />
          </div>
          <button type="submit" onClick={this.submitData}>Send</button>
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
