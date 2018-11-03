import React from 'react';
import './Player.scss';

class Player extends React.Component {
    constructor(props) {
        super()
        this.state = {
            player: props.name,
            selected: '',
            isEye: false,
            heroes: ['Torm', 'Sir Moo', 'Goldfinga', 'Brockenstock', 'Murka Mistcleaver', 'Lady Mary', 'Lanky Lowshot', 'Aristide'],
            dmg: 0,
        }
    }

    //handle select for heroes
    handleSelect = (e) => {
        this.setState({selected: e.target.value});
    }

    //handle input value for dmg
    handleDmgInput = (e) => {
        let newValue = e.target.value > 50 ? 50 : e.target.value;
        if (this.state.dmg !== 0 && e.target.value === 0) {

        }
        this.setState({dmg: newValue})
    }

    //handles if eye symbol is facing up
    handleIsEye = (e) => {

        this.setState({isEye: !this.state.isEye});
    }

    render () {
        return (
            <div className="player">
                <p>{this.state.player}</p>
                <select className="selectChar" onChange={this.handleSelect} value={this.state.selected}>
                    {this.state.heroes.map((char, i) => <option key={i}>{char}</option>)}
                </select>
                <input className="inputDMG" onChange={this.handleDmgInput} value={this.state.dmg} min={0} max={50} type="number"></input>
                <div className="eyeInput">Eye:<input type='checkbox' onChange={this.handleIsEye}></input></div>
                <button>Submit</button>
            </div>
        );
    }
};

export default Player;