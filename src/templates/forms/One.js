import { useState } from "react";
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
    <div key={number} className="col s12 m4">
      <label
        className="center box">
        <div className="flow-text box-content">
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

  return (
    <div>
      <div className="row ">
        <h3>What is your age range?</h3>
        {listItems}
      </div>
      <h5>{newData}</h5>
      <div className="break" />

      {newData !== "" ?
        <button className="btn btn-block blue" onClick={() => update("q1", newData)}>Next</button> :
        <button disabled alt="pick a choice from above" className="btn btn-block">Next</button>
      }
    </div>
  );
}