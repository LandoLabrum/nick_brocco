import { useState } from "react";

export default function ({ data, update }) {
  const [newData, setState] =
    useState({
      fName: "",
      lName: "",
      email: "",
      tel: "",
      date: "",
      time: ""
    });
  const handleChange = e => {
    const { name, value } = e.target;

    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  // function Disp(p){

  //   if(p){
  //     return p
  //   }else{
  //     return 'n/a'
  //   }
  // }
  return (
    <div>
      <h5>Schedule a consultation</h5>
      First Name
      <input
        value={newData.fName}
        type="text"
        onChange={handleChange}
        name="fName"
      />
      Last Name
      <input
        value={newData.lName}
        type="text"
        onChange={handleChange}
        name="lName"
      />
      Email
      <input
        value={newData.email}
        type="email"
        onChange={handleChange}
        name="email"
      />
      Telephone
      <input
        value={newData.tel}
        type="tel"
        onChange={handleChange}
        name="tel"
      />
      Date
      <input 
      type="date"
      value={newData.date}
      name="date"
      onChange={handleChange}
      />
      Time
      <input 
      type="time"
      value={newData.time}
      name="time"
      onChange={handleChange}
      />
      {/* <div className="break" />
       */}
       <br/>
      {/* <Disp/> */}
      {/* {JSON.stringify(newData)}<br /> */}
      <button className="btn btn-block prim" onClick={() => update("q8", newData)}>Next</button>
    </div>
  );
}