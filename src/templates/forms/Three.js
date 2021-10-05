import { useState } from "react";
import { RadioGroup, Row, Textarea } from 'react-materialize';

export default function ({ data, update }) {
  const [newData, setState] = useState("");
  const [err, setErr] = useState('')
  const handleChange = e => {
    const { name, value } = e.target;
      setState(
        value
     );
  };
  function handleErrors() {
    if (newData.length > 10) {
      update("q3", newData)
    } else {
      setErr(<span className="orange-text">** Please give a more detailed description.</span>)
    }
  }
  return (
    <div>
      <div className="row">
        i am plisten 2
        <h5>To the best of your ability paint a picture with your words of your desire!</h5>
        {err}
        <input
          value={newData}
          type="text"
          onChange={handleChange}
          name="desire"
        />
      </div>
      <div className="break" />
      {JSON.stringify(newData)}
      
      { newData.length !== "" ?
        <button className="btn btn-block" onClick={handleErrors}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }
    </div>
  );
}