import React from 'react';
import './App.css';
// Import components
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Station from './components/stations'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Station />  
    </div>
  );
}

export default App;
