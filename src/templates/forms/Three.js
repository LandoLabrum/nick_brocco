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

  const numbers = ["health", "wealth", "love", "happiness"];
  const listItems = numbers.map((number) =>
    <div key={number} className="col s6">
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
    if(newData!=='') update("desire", newData)
 }, [newData])

  return (
    <>
      <div className="row ">
        <h4>Which aspect of your life, do you wish to improve?</h4>
        {listItems}
      </div>
      {/* <h5>{newData}</h5> */}
      {/* <div className="break" /> */}
      <footer >
      {/* {newData !== "" ?
        <button className="btn btn-block prim" onClick={() => update("change", newData)}>Next</button> :
        <button disabled alt="pick a choice from above" className="btn btn-block">Next</button>
      } */}
      </footer>
    </>
  );
}