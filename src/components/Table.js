import './Table.css'
import React from 'react';
import axios from 'axios';


function Table(props) {
  const [isLoading, setLoading] = React.useState(true);
  const [doctorData, setDoctorData] = React.useState({});
  const [tableData, setTableData] = React.useState({});
  React.useEffect(() => {
      setLoading(true);
      var data = axios.get('http://localhost:8080/doctors/' + props.selected);
      data.then((response) => {
        setDoctorData(response.data)
        setTableData(response.data.Appointments);
        setLoading(false);
      });
      data.catch(err => console.log(err))
  }, [props.selected]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }




  return (

    <div className="contentTable">
        <div className = "content">
          <div> <h1>Dr. {doctorData.Name}</h1> <h2>{doctorData.Email}</h2></div>
          <div className="width90">
            <table>
            <tr className="white" style={{background: "rgb(50,127,221)"}}>
              <th className="addPadding">#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Kind</th>
            </tr>
            {tableData.map((doctor, index) => {
              return(
                <tr className = {index & 1 ? 'alternate' : ''}>
                  <td className="addPadding">{doctor.ID}</td>
                  <td>{doctor.Name}</td>
                  <td>{doctor.time}</td>
                  <td>{doctor.Kind}</td>
                </tr>
              )
            })}

            </table>
          </div>
        </div>
    </div>
  );
}

export default Table;
