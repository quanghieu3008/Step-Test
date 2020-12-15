import React, { Component } from 'react';
import Meal from './StepTwo';
import Restaurant from './StepThree';
import DetailDish from './StepFour'
class StepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            meal: '',
            numberPeople: 1,
            restaurant: '',
            dish: '',
            numberDish: 1,
            checkValue: false,
            dataDish: [
                {
                    dish: '',
                    numberDish: 1
                }
            ]
        }
    }

    nextScreenOne = () => {
        const { page, meal, numberPeople } = this.state;
        if (meal)
            this.setState({
                page: page + 1
            })
        else alert('Please fill out all information')
    }
    nextScreenTwo = () => {
        const { page, restaurant } = this.state;
        if (restaurant)
            this.setState({
                page: page + 1
            })
        else alert('Please fill out all information')
    }
    nextScreenThree = () => {
        const { page, dataDish, checkValue } = this.state
        let checkEmpty = []
        checkEmpty = dataDish.filter(word => word.dish === '')
        if (checkEmpty.length != 1) {
            this.setState({
                page: page + 1
            })
        }
        else
            alert('Please fill out all information ')

    }
    backScreen = () => {
        const { page } = this.state;
        this.setState({
            page: page - 1
        })
    }
    pushDish = () => {
        const { dataDish, checkValue } = this.state || []
        let length = dataDish.length
        let checkData = []
        checkData = dataDish.filter(word => word.dish === '')
        if (checkData.length > 0) {
            alert('Please fill out all information')
        }
        else
            if (length >= 10) {
                alert('Max')
            }
            else
                this.setState({
                    dataDish:
                        [...this.state.dataDish,
                        {
                            dish: '',
                            numberDish: 1
                        }
                        ]
                })
    }
    render() {

        const { page, meal, numberPeople, restaurant, dataDish } = this.state
        let listDish = []
        listDish = this.state.dataDish.map(
            (item, idx) => {
                return (
                    <DetailDish
                        item={item}
                        key={idx}
                        handleStateOrder={(dateSe) => {
                            let newArr = [...this.state.dataDish]
                            newArr[idx] = { ...item, ...dateSe }
                            this.setState({ dataDish: newArr })
                        }}
                    />
                )
            }
        )
        switch (page) {
            case 1:
                return (
                    <div>
                        <Meal
                            nextScreenStep={this.nextScreenOne}
                            meal={this.state.meal}
                            numberPeople={this.state.numberPeople}
                            handleStateMeal={(value) => {
                                this.setState({ meal: value })
                            }}
                            handleStatePeople={(people) => {
                                this.setState({ numberPeople: people })
                            }}

                        />
                    </div>

                )
            case 2:
                return (
                    <Restaurant
                        restaurant={this.state.restaurant}
                        nextScreen={this.nextScreenTwo}
                        backScreen={this.backScreen}
                        handleStateRestaurant={(value) => {
                            this.setState({ restaurant: value })
                        }}
                    />
                )
            case 3:
                return (
                    <div style={{ margin: "0 auto", width: '300px' }}>

                        {listDish}
                        <div style={{ display: 'flex', margin: '30px' }}>
                            <button onClick={this.pushDish}>Thêm</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                            <button onClick={this.backScreen}> back</button>
                            <button onClick={this.nextScreenThree}>Next</button>
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div >
                        <div style={{ margin: "0 auto", width: '300px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
                                <text>Meal </text>
                                <text style={{ marginLeft: '20px' }}>{meal} </text>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
                                <text>No of. People </text>
                                <text style={{ marginLeft: '20px' }}> {numberPeople}</text>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
                                <text>Restaurant</text>
                                <text style={{ marginLeft: '20px' }}>{restaurant} </text>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', padding: 10, }}>

                                <div><text>Dishes</text></div>
                                <div style={{ marginLeft: '25px', background: 'gray' }}>
                                    {dataDish.map((item) => {
                                        return (
                                            <div style={{ flexDirection: 'row', padding: '5px', }}>

                                                <text>{item.dish}</text>-
                                                <text style={{ marginLeft: '20px' }}>{item.numberDish} </text>


                                            </div>)
                                    })}
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                                <button onClick={this.backScreen}>Previous</button>
                                <button onClick={this.nextScreenThree}>Submit</button>
                            </div>
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div>
                        Done
                    </div>
                )
        }
    }
}

export default StepOne
