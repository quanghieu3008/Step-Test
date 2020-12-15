
import React, { Component } from 'react';
// import Meal from './StepTwo'
class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: ''
        }
    }
    nextScreen = () => {
        this.props.nextScreen()

    }

    backScreen = () => {
        this.props.backScreen()
    }
    handleChange = (e) => {
        this.props.handleStateRestaurant(e.target.value)
    }

    render() {
        const { restaurant } = this.props
        return (
            <div style={{ margin: "0 auto", width: '300px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <text >Please Select a Restaurant</text>
                </div>
                <select
                    value={restaurant}
                    onChange={this.handleChange} >
                    <option value="">- - -
                        {/* {restaurant != '' ? restaurant : '- - -'} */}
                    </option>
                    <option value="Restaurant A">Restaurant A</option>
                    <option value="Restaurant B">Restaurant B</option>
                    <option value="Restaurant C">Restaurant C</option>
                </select>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '40px' }}>
                    <button onClick={this.backScreen}> Previous</button>
                    <button onClick={this.nextScreen}>Next</button>
                </div>
            </div>
        );
    }
}

export default Restaurant