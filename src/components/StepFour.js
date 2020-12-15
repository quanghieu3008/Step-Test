
import React, { Component } from 'react';



class DetailDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleChangeTime = (e) => {
        this.props.handleStateOrder({ dish: e.target.value })

    }
    handleChangeNumber = (e) => {
        this.props.handleStateOrder({ numberDish: e.target.value })
    }
    render() {
        const { dish, numberDish } = this.props.item
        return (
            <div style={{ padding: '5px', display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                <div style={{ marginBottom: '10px' }}>
                    <text >Please Select a Dish</text>
                    <div style={{ marginTop: "5px" }}>
                        <select
                            defaultValue={dish}
                            onChange={this.handleChangeTime} >
                            <option value="">{dish != '' ? dish : '- - -'}</option>
                            <option value="dish A">dish A</option>
                            <option value="dish B">dish B</option>
                            <option value="dish C">dish C</option>
                        </select>
                    </div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <text >Please Enter no. of servings </text>
                    <div style={{ marginTop: "5px" }}>
                        <input type="number"
                            value={numberDish}
                            min="1" max="10"
                            onChange={this.handleChangeNumber}
                        ></input>
                    </div>
                </div>

            </div>
        );
    }
}
export default DetailDish
