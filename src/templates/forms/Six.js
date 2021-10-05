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
      <h3>How willing are you to change to get what you want?</h3>
      <RadioGroup
        name="age"
        onChange={handleChange}
        value={newData}
        options={[
          {
            label: 'I am very willing, I will do whatever it takes',
            value: 'I am very willing, I will do whatever it takes'
          },
          {
            label: 'I am open to change, but not ready to go all in',
            value: 'I am open to change, but not ready to go all in'
          },
          {
            label: 'I am open to change but it depends what it is',
            value: 'I am open to change but it depends what it is'
          },
          {
            label: 'I am not sure at this time',
            value: 'I am not sure at this time'
          }
        ]}
        radioClassNames="btn btn-large white black-text col s12 m4"
      />
      </div>
      <div className="break" />
      {JSON.stringify(newData)}
      {newData !== "" ?
        <button className="btn btn-block" onClick={() => update("q6", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }

    </div>
  );
}