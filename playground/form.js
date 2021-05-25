

let person = {}

const submitData = (e) => {
    console.log('dubmit data')

    let personName = e.target.elements.personName.value
    let personAddress = e.target.elements.personAddress.value


    person.name = personName;
    person.address = personAddress;
    // console.log("name" + name)
    // prevent default submission
    e.preventDefault()
    render();
}


const render = () => {
    const template = (
        <div>
            <h3>Form </h3>
            <form onSubmit={submitData}>
                <div >
                    Name: <input type="text" name="personName" />{''}
                </div>

                <div >

                    Address: <input type="text" name="personAddress" />{''}
                </div>

                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>

            <div>
                <h1>Person details </h1>

                { person.name && <div>Name: {person.name} </div>}
                { person.address && <div>Address: {person.address} </div>}
            </div>
        </div>



    )



    ReactDOM.render(template, document.getElementById("app"))

}




render()
