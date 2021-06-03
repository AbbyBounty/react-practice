import React from 'react'
import Header from './header'

export default class CounterApp extends React.Component {

    constructor(props) {
        super(props)

        this.onDecrement = this.onDecrement.bind(this)
        this.onIncrement = this.onIncrement.bind(this)
        this.state = {
            counter: 0,
        }
    }


    onIncrement() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1,
            }
        })
    }
    onDecrement() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1,
            }
        })
    }


    render() {
        return <div>
            <Header title="counter App" subtitle="this is subtitle " />

            <div>
                <h4>Counter: {this.state.counter}</h4>
                <button className="btn btn-success mx-3" onClick={this.onIncrement}>plus</button>
                <button className="btn btn-danger mx-3" onClick={this.onDecrement}>minus</button>
            </div>
        </div>
    }
}



