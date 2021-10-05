import { useState } from "react";
import { RadioGroup, Checkbox } from 'react-materialize';

export default function ({ data, update }) {
  const [newData, setState] =
    useState({
      s1: "",
      s2: "",
      s3: "",
      s4: ""
    });
  const handleChange = e => {
    const { name, value } = e.target;
    if (value == "") {
      setState(prevState => ({
        ...prevState,
        [name]: "true"
      }));
    } else if(value == "true"){
      setState(prevState => ({
        ...prevState,
        [name]: "false"
      }));
    }
     else if(value == "false"){
      setState(prevState => ({
        ...prevState,
        [name]: "true"
      }));
    }
     else {
      setState(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <div>
    <div className="row">
      <div className="break" />
      <h3>Select all that describe you</h3>
      <Checkbox
        label="I am Unsatisfied with my life and I believe nobody can help me"
        name="s1"
        onChange={handleChange}
        value={newData.s1}
      />
      <br/>
      <Checkbox
        label="I am unsatisfied with my life and I need guidance,community, & encouragement"
        name="s2"
        onChange={handleChange}
        value={newData.s2}
      />
      <br/>
      <Checkbox
        label="I am partly satisfied with my life and want to join a community of like-minded people"
        name="s3"
        onChange={handleChange}
        value={newData.s3}
      />
      <br/>
      <Checkbox
        label="I am completely satisfied with my life and believe there are no improvements to be made"
        name="s4"
        onChange={handleChange}
        value={newData.s4}
      />
      </div>
      <div className="break" />
      {JSON.stringify(newData)}
      {newData !== "" ?
        <button className="btn btn-block" onClick={() => update("q2", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }

    </div>
  );
}