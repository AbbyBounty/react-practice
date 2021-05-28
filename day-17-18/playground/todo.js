
// const items = [
//     { id: 1, title: 'read react book 1', staus: 'open' },
//     { id: 2, title: 'read react book 2', staus: 'open' },
//     { id: 3, title: 'read react book 3', staus: 'open' }
// ]

let items = []


const addItem = (e) => {

    console.log(e)
    const title = e.target.elements.itemtext.value;

    items.push({
        id: items.length + 1,
        status: 'open',
        title,
    })
    e.preventDefault()
    render()
}


const markItem = (itemToRemove) => {
    // for (let index = 0; index < items.length; index++) {
    //     if (item.id == itemToRemove.id) {
    //         items.splice(index, 1)
    //         break;
    //     }
    // }

    items=items.filter((item)=>item.id  != itemToRemove.id)
    render()
}


const render = () => {
    const template = (
        <div>
            <h1 className="title">Todo App</h1>
            <div className="add-todo">
                <form onSubmit={addItem}>
                    <div className="input-group mb-3">
                        <textarea name="item" rows="3" placeholder="add your to do here" name="itemtext"></textarea>
                        <button className="btn btn-success" type="button" id="button-addon2"   >Add </button>

                    </div>
                </form>
            </div>

            <div className="item-list">
                {items.map((item) => {
                    return (<div className="item">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Recipient's username" value={item.title} aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button onClick={() => {
                                    markItem(item)
                                }} className="btn btn-danger" type="button">Complete</button>
                            </div>
                        </div>
                    </div>)
                })}

            </div>


        </div>
    )
    ReactDOM.render(template, document.getElementById('app'))

}


render()

