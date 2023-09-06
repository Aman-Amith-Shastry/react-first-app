import NavBar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Body';
import About from './About'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className = "content">
            <Switch>
                <Route exact path = "/">
                  <Body />
                </Route>

                <Route exact path = "/about">
                  <About />
                </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
