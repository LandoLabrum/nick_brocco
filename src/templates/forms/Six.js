import { useState, useEffect } from "react";
// import { RadioGroup, Checkbox } from 'react-materialize';

export default function ({ data, update }) {
  const [newData, setState] =
    useState("");
  const handleChange = e => {
    const { name, value } = e.target;
      setState(
        value
     );
  };
  const numbers = [
    "I am very willing, I will do whatever it takes",
    "I am open to change, but not ready to go all in",
    "I am open to change but it depends what it is",
    "I am not sure at this time",
  ];
  const listItems = numbers.map((number) =>
    <div key={number} className="col s6 ">
      <label
        className="center box">
        {/* {number !== ""?<span style={{marginTop: "35px", position: "fixed"}} className="material-icons green-text">check_circle</span>:""} */}

        <div className="flow-text box-content ">
          <input
            className="event"
            type="radio"
            name="age"
            onChange={handleChange}
            value={number}
          />
          <p style={{lineHeight: "1rem", fontSize: ".9rem", padding: "7px"}}>{number}</p>
        </div>
      </label>
    </div>
  );
  useEffect(()=>{ // this will re run every time search changes
    if(newData!=='') update("willing", newData)
 }, [newData])
  return (
    <div>
    <div className="row">
      <h4>How willing are you to change to get what you want?</h4>
      {listItems}
      </div>
      {/* {JSON.stringify(newData)} */}
      {/* {newData !== "" ?
        <button className="btn btn-block prim" onClick={() => update("willing", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      } */}

    </div>
  );
}