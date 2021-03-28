import './App.css';
import axios from 'axios';
import React from 'react';
import Sidebar from './components/Sidebar';
import Table from './components/Table';

function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [doctors, setDoctors] = React.useState({});
  const [selected, setSelected] = React.useState(0);

  function changeSelected(id){
      setSelected(id);
  }

  React.useEffect(() => {
      var data = axios.get('http://localhost:8080/doctors');
      data.then((response) => {
        setDoctors(response.data);
        setSelected(response.data[0].id);
        setLoading(false);
      });
      data.catch(err => console.log(err))
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <Sidebar doctors={doctors} selected={selected} changeSelected={changeSelected} />
      <Table selected={selected} />
    </div>
  );
}

export default App;
