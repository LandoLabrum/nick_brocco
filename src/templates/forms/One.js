import { useState, useEffect } from "react";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default function ({ data, update }) {
  const [newData, setState] =
    useState("");
  const handleChange = e => {
    
    const { name, value } = e.target;
    setState(
      value
    )
  };
  const [show, setShow] = useState("");

  const numbers = ["Teens", "20s", "30s", "40s", "50s", "60s+"];
  const listItems = numbers.map((number) =>
    <div key={number} className="col s6 m4">
      <label
        className="center box">
        <div className="flow-text box-content" >
          <input
            className="event"
            type="radio"
            name="age"
            onChange={handleChange}
            value={number}
          />
          {number}
        </div>
      </label>
    </div>
  );
  useEffect(()=>{ // this will re run every time search changes
    if(newData!=='') update("age_range", newData)
 }, [newData])

  return (
    <>
      <div className="row ">
        <h3>What is your age range?</h3>
        {listItems}
      </div>
      {/* <h5>{newData}</h5> */}
      {/* <div className="break" /> */}
      {/* <footer >
      {newData !== "" ?
        <button className="btn btn-block prim" onClick={() => update("age_range", newData)}>Next</button> :
        <button disabled alt="pick a choice from above" className="btn btn-block">Next</button>
      }
      </footer> */}
    </>
  );
}