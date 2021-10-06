import { useState } from "react";
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
    <div className="col s12 m4">
      <div style={{ height: "150px" }} className="card">
        <div className="card-content">
          <label>
            <input
              type="radio"
              name="age"
              onChange={handleChange}
              value={number}
            />
            <h6 className="center">{number}</h6>
          </label>
        </div>
      </div>
    </div>
  );
  return (
    <div>
    <div className="row">
      <h3>How willing are you to change to get what you want?</h3>
      {listItems}
      </div>
      <div className="break" />
      {/* {JSON.stringify(newData)} */}
      {newData !== "" ?
        <button className="btn btn-block blue" onClick={() => update("q6", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }

    </div>
  );
}