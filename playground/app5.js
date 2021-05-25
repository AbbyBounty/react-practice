console.log('hrllo')


let i = 0;

const plus = () => {
    i = i + 1;
    render()

}
const minus = () => {
    i = i - 1;
    render()

}



const double = () => {
    i = i * 2;
    render()

}
const triple = () => {
    i = i * 3;
    render()

}

const reset = () => {
    i = 0;
    render()

}


const render = () => {
    const template = (
        <div>
            <h3>App4 </h3>
            <div>Count: {i}</div>
            <button onClick={plus}>plus</button>
            <button onClick={minus}>minus</button>
            <hr></hr>

            <button onClick={double}>double</button>
            <button onClick={triple}>triple</button>
            <hr></hr>
            <button onClick={reset}>reset</button>

        </div>
    )



    ReactDOM.render(template, document.getElementById("app"))

}




render()
