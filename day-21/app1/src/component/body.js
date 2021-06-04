import { useState } from "react";

const Body = () => {

    const [state, setstate] = useState({
        counter: 0
    })



    function onAdd() {
        setstate({
            counter: state.counter + 1
        })
    }

    function onDec() {
        setstate({
            counter: state.counter - 1
        })
    }

    return (
        <div>
            <h3>Counter: {state.counter}</h3>
            <button className="btn mx-3 btn-success" onClick={onAdd} >+1</button>
            <button className="btn mx-3 btn-danger" onClick={onDec}>+1</button>


            <h3>Counter: {state.counter}</h3>
            <button className="btn mx-3 btn-success" onClick={onAdd} >+1</button>
            <button className="btn mx-3 btn-danger" onClick={onDec}>+1</button>
        </div>
    )

}


export default Body;