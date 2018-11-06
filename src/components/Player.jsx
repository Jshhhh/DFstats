import React from 'react';
import { connect } from 'react-redux';
import { changeName } from '../actions/playerActions';

import './Player.scss';

const mapStateToProps = ({heroes}) => {
    return {
        heroes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeName: (id, name) => dispatch(changeName(id, name))
    }
}

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: this.props.name,
            inputName: this.props.name,
            selectedHero: '',
            isEye: false,
            dmg: 0,
            editing: false,
        }
    }
    
    //changes name tag to input tag
    editName = () => {
        this.setState({editing: true})
    }

    handleFocus = (e) => {
        e.target.select();
    }

    //changes player name
    handleName = (e) => {
        this.setState({inputName: e.target.value});
    }
    
    //changes name input to p tag
    submitName = (e) => {
        if (e.keyCode === 13) {
            this.setState({editing: false, player: this.state.inputName});
            this.props.changeName(this.props.index, e.target.value);
        } else if (e.keyCode === 27) {
            this.setState({editing:false});
        }
    }

    //handle select for heroes
    handleSelect = (e) => {
        this.setState({selectedHero: e.target.value});
    }

    //handle input value for dmg
    handleDmgInput = (e) => {
        let newValue = e.target.value > 50 ? 50 : e.target.value;
        if (this.state.dmg !== 0 && e.target.value === 0) {

        }
        this.setState({dmg: newValue})
    }

    //handles if eye boolean
    handleIsEye = (e) => {
        this.setState({isEye: !this.state.isEye});
    }


    render() {
        return (
            <div className='player'>
                {
                    this.state.editing ?
                    <input className='editName' value={this.state.inputName}
                        type='text' onChange={this.handleName} onKeyUp={this.submitName}
                        autoFocus={true}
                        onFocus={this.handleFocus}
                    />
                    :
                    <p className="player-name" onDoubleClick={this.editName}>{this.state.player}</p> 
                }
                <select className='selectChar' onChange={this.handleSelect} value={this.state.selected}>
                    <option hidden>Select Hero</option>
                    {this.props.heroes.map((char, i) => <option key={i}>{char}</option>)}
                </select>
                <input className='inputDMG' onChange={this.handleDmgInput} value={this.state.dmg} min={0} max={50} type='number'></input>
                <div className='eyeInput'>Special:<input type='checkbox' onChange={this.handleIsEye}></input></div>
                <button>Submit</button>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);