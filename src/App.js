import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// App is our t-root component
function App() {

  // jsx template
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
