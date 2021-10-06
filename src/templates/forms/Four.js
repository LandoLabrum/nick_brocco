import { useState } from "react";
// import { RadioGroup, Row, Textarea } from 'react-materialize';

export default function ({ data, update }) {
  const [newData, setState] = useState("");
  const handleChange = e => {
    const { name, value } = e.target;
    setState(value);
  };
  const numbers = [
    "People who have what I want",
    "People who don’t have what I want",
    "Nobody, I know it all.",
    "Everybody",
  ];
  const listItems = numbers.map((number) =>
    <div key={number} className="col s12 m6 l4">
      <label
        className="center box">
        {/* {number !== ""?<span style={{marginTop: "35px", position: "fixed"}} className="material-icons green-text">check_circle</span>:""} */}

        <div className="flow-text box-content">
          <input
            className="event"
            type="radio"
            name="age"
            onChange={handleChange}
            value={number}
          />
          <p style={{lineHeight: "28px", fontSize: "20px", padding: "5px"}}>{number}</p>
        </div>
      </label>
    </div>
  );
  return (
    <div>
      <div className="row">
        <h5>Who do you listen to?</h5>
        {listItems}
      </div>
      <h5>{newData}</h5>
      <div className="break" />

      {newData !== "" ?
        <button className="btn btn-block blue" onClick={() => update("q4", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }
    </div>
  );
}