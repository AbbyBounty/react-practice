import Header from "./header"
import { useState } from "react"

const CounterApp = () => {


    const [state, setState] = useState({
        counter: 0,
    })



    const onAdd = () => {

        setState({
            counter: state.counter + 1
        })


    }


    const onDec = () => {
        setState({
            counter: state.counter - 1
        })
    }

    return (
        <div>
            <Header title="counter app" subtitle="this is app" />


            <div>
                <h4>Counter: {state.counter} </h4>
                <button className="btn btn-success mx-3" onClick={onAdd}>plus</button>
                <button className="btn btn-danger mx-3" onClick={onDec}>minus</button>
            </div>




            <div>
                <h4>Counter: {state.cnt} </h4>
                <button className="btn btn-success mx-3" onClick={onAdd}>plus</button>
                <button className="btn btn-danger mx-3" onClick={onDec}>minus</button>
            </div>
        </div>
    )
}

export default CounterApp