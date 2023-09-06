import NavBar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Body';
import About from './About'
import UserDetails from './UserDetails';

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

                <Route exact path = "/user/:id">
                  <UserDetails />
                </Route>

            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
