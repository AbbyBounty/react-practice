console.log('hrllo')




const clickHandler=()=>{
    alert('button clicked')
}



const template = (
    <div>
        <h3>App4 </h3>
        <button onClick={clickHandler}>click here</button>
    </div>
)


console.log(template)

ReactDOM.render(template, document.getElementById("app"))


