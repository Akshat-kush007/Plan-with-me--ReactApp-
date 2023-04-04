import './App.css';
import data from './data';
import React, { useState } from 'react'
import Cards from './components/Cards';


function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    let newTours = tours.filter(tour => id != tour.id);
    setTours(newTours);
  }

  return (
    tours.length === 0
      ? <div className="refresh">
        <div className='noValue'>
          <h2> No Tour Left</h2>
          <button onClick={() => { setTours(data) }}>Refresh</button>
        </div>
      </div>
      : <div className="container">
        <Cards tours={tours} removeTour={removeTour}></Cards>
      </div>

  );
}

export default App;
