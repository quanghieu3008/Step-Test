
import React, { Component } from 'react';
// import Meal from './StepTwo'
class Meal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mealTime: '',
            numberPeople: 1,

        }

    }
    nextScreen = () => {
        this.props.nextScreenStep()
    }

    handleChangeTime = (e) => {
        this.props.handleStateMeal(e.target.value)

    }
    handleChangeNumber = (e) => {
        this.props.handleStatePeople(e.target.value)

    }
    render() {
        const { meal, numberPeople } = this.props
        return (
            <div >
                <div style={{ marginBottom: '10px' }}>
                    <text > Please Select a meal</text>
                </div>
                <select
                    value={meal}
                    onChange={this.handleChangeTime} >
                    <option value="">- - -</option>
                    <option value="breakfast">breakfast</option>
                    <option value="lunch">lunch</option>
                    <option value="dinner">dinner</option>
                </select>
                <div style={{ marginBottom: '10px' }}>
                    <text >Please Enter Number of people</text>
                </div>
                <input
                    type="number"
                    value={numberPeople}
                    min="1" max="10"
                    onChange={this.handleChangeNumber}
                ></input>

                <div style={{ marginTop: '20px' }}>
                    <button onClick={this.nextScreen}>Next</button>
                </div>
            </div>
        );
    }
}

export default Meal