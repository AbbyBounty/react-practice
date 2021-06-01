class NotesApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [
                { id: 1, title: "note 1" },
                { id: 2, title: "note 2" },
                { id: 3, title: "note 3" }
            ]
        }
    }
    // this.onAdd=this.onAdd.bind(this)

    onAdd(note) {
        this.setState(prevState => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: prevState.notes.length + 1,
                        title: note,
                    },
                ],
            }
        })
    }

    onRemove(note) {

        this.setState((prevState) => {
            return {
                notes: prevState.notes.filter((note) => { })
            }
        })
    }

    render() {
        return (
            <div>
                <Header title={this.props.title} subtitle={this.props.subtitle} />
                <AddNote />
                <NotesList notes={this.state.notes} />
            </div>
        )
    }
}

NotesApp.defaultProps = {
    title: 'note app',
    subtitle: "what do you want to do ?"
}

class Header extends React.Component {
    render() {
        return (
            <div className="title">
                <h1 >{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div >
        )
    }
}

class AddNote extends React.Component {

    constructor(props) {
        super(props)
        this.onAdd = this.onAdd.bind(this)
    }

    onAdd(e) {
        const note = e.target.elements.note.value
        e.preventDefault()
    }
    render() {
        return (
            <div className="add-note">
                <form onSubmit={this.onAdd}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="note title" name="note" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" >Add</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


class NotesList extends React.Component {

    constructor(props) {
        super(props)

        this.onRemove = this.onRemove.bind(this)

    }

    onRemove(note) {
        console.log('removing' + note.title)
    }


    render() {
        return (
            <div className="notes-list">
                {
                    this.props.notes.map((note) => {

                        return (
                            <div>
                                {note.title}
                                <button onClick={
                                    () => {
                                        this.onRemove(note)
                                    }
                                }>delete</button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

ReactDOM.render(
    <NotesApp title="Notes App" subtitle="what do you want to do today?" />, document.getElementById('app')
)