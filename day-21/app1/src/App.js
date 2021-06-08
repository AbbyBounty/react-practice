import './App.css';
import Header from './component/header'
import Body from './component/body'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
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
