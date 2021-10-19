import { useState, useEffect } from "react";

export default function ({ data, update }) {
  const [newData, setState] = useState({
      unsatisfied_no_help: "",
      unsatisfied_help: "",
      partly_satisfied: "",
      satisfied: ""
    });

  const handleChange = e => {
    const { name, value } = e.target;

    if (value == "") {
      setState(prevState => ({
        ...prevState,
        [name]: true
      }));
    } else if (value == true) {
      setState(prevState => ({
        ...prevState,
        [name]: false
      }));
    }
    else if (value == false) {
      setState(prevState => ({
        ...prevState,
        [name]: true
      }));
    }
    else {
      setState(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
    // console.log(e.target)
    e.preventDefault();
    e.target.classList.toggle("red");
  };

  function Validataion(props) {
    let result = false;
    for (let k in props) {
      if(props[k] !== ""){
        result = true
        break;
      }
    }
    return result
  }

  function Li(props) {
    
    return (
      <div key={props.n} className="col s6">
      <label
        className="center box">
        <div className="box-content ">
          <input
            className="event"
            type="checkbox"
            name={props.n}
            onChange={handleChange}
            value={props.v}
          />
          
          <p 
          style={{lineHeight: "1rem", fontSize: ".8rem", padding: "7px", maxWidth: "100%"}}
          className={props.v==""?"":"white-text"}>{props.l}</p>
        </div>
      </label>
    </div>
    );
  }

  return (
    <div>

      <div className="row ">
        <h3>Select all that describes you</h3>
        <Li
          n="unsatisfied_no_help"
          v={newData.unsatisfied_no_help}
          l="I am Unsatisfied with my life and I believe nobody can help me"
        />
        <Li
          n="unsatisfied_help"
          v={newData.unsatisfied_help}
          l="I am unsatisfied with my life and I need guidance,community, and encouragement"
        />
        <Li
          n="partly_satisfied"
          v={newData.partly_satisfied}
          l="I am partly satisfied with my life and want to join a community of like-minded people"
        />
        <Li
          n="satisfied"
          v={newData.satisfied}
          l="I am completely satisfied with my life and believe there are no improvements to be made"
        />
      </div>
      {/* <div className="break" /> */}

      {/* {JSON.stringify(newData)} */}
      <footer >
      {Validataion(newData) ?
        <button className="btn btn-block prim" onClick={() => update("describe", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }
      
   </footer>
    </div>
  );
}