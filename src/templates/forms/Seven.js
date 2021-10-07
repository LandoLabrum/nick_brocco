import { useState } from "react";

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
      update("q7", newData)
    } else {
      setErr(<span className="orange-text">** Please give a more detailed description.</span>)
    }
  }
  return (
    <div>
      <div className="row card">
      <div className="card-content">
        <h5 className="grey-text text-darken-3">Why are you ready to change now, and not next year?</h5>
        {err}
        <br/>

              <div className="input-field ">

<input
  placeholder=""
  value={newData}
  type="text"
  onChange={handleChange}
  name="desire"
/>
<label className="grey-text text-lighten-1">Please be descriptive</label>
</div>
      </div>
      </div>
      <div className="break" />
      {/* {JSON.stringify(newData)} */}
      
      { newData.length !== "" ?
        <button className="btn btn-block prim" onClick={handleErrors}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }
    </div>
  );
}