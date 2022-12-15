import './App.css';

import StaticComponent from './components/StaticComponent';
import StatefullComponent from './components/StatefullComponent';
import FetchingComponent from './components/UseEffect';

function App() {
  return (
    <div className="App">
      {/* <StatefullComponent>
        <h3>Element 1</h3>
        <h3>Element 2</h3>
        <h3>Element 3</h3>
        <h3>Element 4</h3>
        <h3>Element 5</h3>
      </StatefullComponent> */}

      <FetchingComponent />


    </div>
  );
}

export default App;
