import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [quotes, setQuotes] = useState('')

  const fetchData = ()=> {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip
      setQuotes(advice)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <h1 className='title'>your daily Quote</h1>
      <div className='quote-card'>
        <h1 className='quote'>{quotes}</h1>
        <button onClick={fetchData}>Get Quote</button>
      </div>
    </div>
  );
}

export default App;
