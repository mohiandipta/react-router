import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav';
import Home from './pages/home';
import Help from './pages/help';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

        <Nav />

        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/help">
            <Help />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
