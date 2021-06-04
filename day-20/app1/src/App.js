import './App.css';
import About from './components/about'
import Product from './components/products'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>My application</h1>

      <Router>

        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/product" component={Product}></Route>
        </Switch>



      </Router>




    </div >
  );
}

export default App;
