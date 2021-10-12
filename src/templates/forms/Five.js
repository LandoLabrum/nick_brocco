import { useState } from "react";
// import { RadioGroup, Row, Textarea } from 'react-materialize';

export default function ({ data, update }) {
  const [newData, setState] = useState(0);
  const handleChange = e => {
    const { name, value } = e.target;
    setState(value);
  };

  return (
    <div>
      <div className="row">
        <h4>How teachable are you?</h4>
        <br/>
        <div className="card">
          <div className="card-content">
        <span className="card-title"> {newData} / 10</span>
        <br/>
            <p className="range-field">
              <input
              className="red"
                onChange={handleChange}
                value={newData}
                type="range" min="0" max="10" />
            </p>
            <br/>
          </div>
        </div>
      </div>
      <div className="break" />
      {/* {JSON.stringify(newData)} */}

      {newData !== "" ?
        <button className="btn btn-block prim" onClick={() => update("teachable", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }
    </div>
  );
}