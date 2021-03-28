import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [doctors, setDoctors] = React.useState({});
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="App">
      <h1>Hello World </h1>
    </div>
  );
}

export default App;
