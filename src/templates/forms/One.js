import { useState } from "react";
import { RadioGroup, Checkbox } from 'react-materialize';

export default function ({ data, update }) {
  const [newData, setState] =
    useState("");
  const handleChange = e => {
    const { name, value } = e.target;
      setState(
        value
     );
  };

  return (
    <div>
    <div className="row">
      <h3>What is your age range?</h3>
      <RadioGroup
        name="age"
        onChange={handleChange}
        value={newData}
        options={[
          {
            label: 'Teens',
            value: 'Teens'
          },
          {
            label: '20s',
            value: '20s'
          },
          {
            label: '30s',
            value: '30s'
          },
          {
            label: '40s',
            value: '40s'
          },
          {
            label: '50s',
            value: '50s'
          },
          {
            label: '60+',
            value: '60+'
          }
        ]}
        radioClassNames="btn btn-large white black-text col s12 m4"
      />
      </div>
      <div className="break" />
      {JSON.stringify(newData)}
      {newData !== "" ?
        <button className="btn btn-block" onClick={() => update("q1", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }

    </div>
  );
}