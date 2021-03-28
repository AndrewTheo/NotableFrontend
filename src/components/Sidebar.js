import './Sidebar.css';
import React from 'react';

function Sidebar(props) {

  function handleClick(e)
  {
    props.changeSelected(e);
  }

  return (
    <div className="sidebar">
        <div className = "content">
            <div> <h1>Notable</h1></div>
            <div className="fullWidth">
             <h1>Physicians</h1>
             <div className="list">
                 {props.doctors.map((doctor, index) => {
                   return(
                     <div  onClick={() => handleClick(doctor.id)}
                          className = {doctor.id === props.selected ? 'listItem selected' : 'listItem'}>
                      <div className="addPadding">{doctor.name}</div>
                     </div>
                   )
                 })}
             </div>

           </div>
        </div>
        <div><button>Logout</button> </div>
    </div>
  );
}

export default Sidebar;
