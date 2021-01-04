import logo from './logo.svg';
import './App.css';
import People from'./component/People'
import Starship from './component/Starship'
import React,{useState} from 'react'

function App() {

  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1 className="title">Star Wars API</h1>
      <center><input className="Input" type='text' value={input} placeholder='search name' onChange={e => setInput(e.target.value)}></input></center>
      <People search={input}/>
      <Starship search={input}/>
    </div>
  );
}

export default App;
