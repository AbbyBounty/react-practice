import './App.css';
import Header from './component/header'
import Body from './component/body'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createStore } from 'redux'

//action
const increment = () => {
  return { type: 'increment' }
}


const decrement = () => {
  return { type: 'decrement' }
}

//reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    default:
      return 0
  }
}

//store
let store = createStore(counterReducer)

//dispatch
store.subscribe(() => {
  console.log('updated store ', store.getState())
})
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())


function App() {
  return (
    <div className="App">

      <Router>

        <Link to="/header"> Header </Link>
        <Link to="/body"> Body </Link>

        <Switch>
          <Route path="/header" component={Header} />
          <Route path="/body" component={Body} />

        </Switch>

      </Router>



    </div>
  );
}

export default App;
