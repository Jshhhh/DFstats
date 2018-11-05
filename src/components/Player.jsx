import React from 'react';
import { connect } from 'react-redux';
import './Player.scss';

const mapStateToProps = ({heroes}) => {
    return {
        heroes
    }
}

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: this.props.name,
            selected: '',
            isEye: false,
            // heroes: ['Torm', 'Sir Moo', 'Goldfinga', 'Brockenstock', 'Murka Mistcleaver', 'Lady Mary', 'Lanky Lowshot', 'Aristide'],
            dmg: 0,
            editing: false,
        }
    }
    
    //changes name tag to input tag
    editName = () => {
        this.setState({editing: true})
    }

    //changes player name
    handleName = (e) => {
        this.setState({player: e.target.value});
    }
    
    //changes name input to p tag
    changeName = (e) => {
        if (e.key === 'Enter') {
            this.setState({editing: false});
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

    //handles if eye boolean
    handleIsEye = (e) => {
        this.setState({isEye: !this.state.isEye});
    }


    render() {
        return (
            <div className='player'>
                {
                    this.state.editing ?
                    <input className='editName' value={this.state.player} type='text' onChange={this.handleName} onKeyUp={this.changeName}></input>
                    :
                    <p onDoubleClick={this.editName}>{this.state.player}</p> 
                }
                <select className='selectChar' onChange={this.handleSelect} value={this.state.selected}>
                    <option hidden>Select Hero</option>
                    {this.props.heroes.map((char, i) => <option key={i}>{char}</option>)}
                </select>
                <input className='inputDMG' onChange={this.handleDmgInput} value={this.state.dmg} min={0} max={50} type='number'></input>
                <div className='eyeInput'>Eye:<input type='checkbox' onChange={this.handleIsEye}></input></div>
                <button>Submit</button>
            </div>
        );
    }
};

export default connect(mapStateToProps)(Player);