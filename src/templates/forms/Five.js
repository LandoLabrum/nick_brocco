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
        <h5>How teachable are you?</h5>
        <div className="card">
          <div className="card-content">


            <p className="range-field">
              <input
                name="q5"
                onChange={handleChange}
                value={newData}
                type="range" min="0" max="10" />
            </p>
          </div>
        </div>
      </div>
      <div className="break" />
      {/* {JSON.stringify(newData)} */}

      {newData !== "" ?
        <button className="btn btn-block" onClick={() => update("q5", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }
    </div>
  );
}