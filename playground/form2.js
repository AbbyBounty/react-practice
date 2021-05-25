

let person = {}

const submitData = (e) => {
    console.log('dubmit data')

    let title = e.target.elements.title.value
    let descriptionn = e.target.elements.descriptionn.value


    person.title = title;
    person.description = descriptionn;
    // console.log("title" + title)
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
                    title: <input type="text" name="title" />{''}
                </div>

                <div >

                    description: <input type="text" name="descriptionn" />{''}
                </div>

                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>

            <div>
                <h1>category details </h1>

                {person.title && <div>title: {person.title} </div>}
                {person.description && <div>description: {person.description} </div>}
            </div>
        </div>



    )



    ReactDOM.render(template, document.getElementById("app"))

}




render()
