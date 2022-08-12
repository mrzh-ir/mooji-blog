import Navbar from './Navbar';
import Home from './Home';

// App is our t-root component
function App() {

  // jsx template
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1><Home/></h1>
      </div>
    </div>
  );
}

export default App;
