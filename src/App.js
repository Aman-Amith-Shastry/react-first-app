import NavBar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Body';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className = "content">
            <Body/>
        </div>
      </div>
    </Router>
  );
}

export default App;
