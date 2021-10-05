import { useState } from "react";
import { RadioGroup, Row, Textarea } from 'react-materialize';

export default function ({ data, update }) {
  const [newData, setState] = useState(0);
  const handleChange = e => {
    const { name, value } = e.target;
    setState(value);
  };

  return (
    <div>
      <div className="row">
        i am plisten 5
        <h5>How teachable are you?</h5>

        <p className="range-field">
      <input 
        name="q5"
        onChange={handleChange}
        value={newData}
      type="range" min="0" max="10" />
    </p>
        {/* <RadioGroup
          name="listen"
          onChange={handleChange}
          value={newData}
          options={[
            {
              label: 'People who have what I want',
              value: 'People who have what I want'
            },
            {
              label: 'People who don’t have what I want',
              value: 'People who don’t have what I want'
            },
            {
              label: 'Nobody, I know it all.',
              value: 'Nobody, I know it all.'
            },
            {
              label: 'Everybody',
              value: 'Everybody'
            }
          ]}
          radioClassNames="btn lrg white valign-wrapper black-text col s12 m4"
        /> */}
      </div>
      <div className="break" />
      {JSON.stringify(newData)}
      
      {newData !== "" ?
        <button className="btn btn-block" onClick={() => update("q5", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }
    </div>
  );
}