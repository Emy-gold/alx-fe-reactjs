import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Profile from './components/Profile';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <Link to="/profile">Profile</Link>
        </nav>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
