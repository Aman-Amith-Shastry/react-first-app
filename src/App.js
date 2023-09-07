import React from 'react';
import NavBar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Body';
import About from './About'
import UserDetails from './UserDetails';
import RegisterUser from './Register';

class LoadPaths extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          {/* <NavBar /> */}
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

                  <Route exact path = "/register">
                    <RegisterUser />
                  </Route>

              </Switch>
          </div>
        </div>
      </Router>
    );
  }

}

class App extends React.Component {
  render(){
    return (
      <LoadPaths/>
    );
  }
}

export default App;