class App extends React.Component {

    render() {
        return <div > <Header title="page 1" />
            <Header title="page 2" />
        </div>
    }
}


class Header extends React.Component {

    render() {
        return <div> {this.props.title}</div>
    }
}

class FirstComponent extends React.Component {

    render() {
        return <div>hello1</div>

    }
}



ReactDOM.render(<App />, document.getElementById('app'))