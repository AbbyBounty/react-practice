

const Header = (props) => {

    return (
        <div className="title">
            <h1>{props.title}</h1>
        </div>
    )

}


ReactDOM.render(<Header title="this is a title" />, document.getElementById('app'))