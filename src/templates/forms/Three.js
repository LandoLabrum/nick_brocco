// import { useState, useEffect } from "react";

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }


// export default function ({ data, update }) {
//   const [newData, setState] =
//     useState("");
//   const handleChange = e => {
    
//     const { name, value } = e.target;
//     setState(
//       value
//     )
//   };
//   const [show, setShow] = useState("");

//   const numbers = ["health", "wealth", "love", "happiness"];
//   const listItems = numbers.map((number) =>
//     <div key={number} className="col s6">
//       <label
//         className="center box">
//         <div className="flow-text box-content" >
//           <input
//             className="event"
//             type="radio"
//             name="age"
//             onChange={handleChange}
//             value={number}
//           />
//           {number}
//         </div>
//       </label>
//     </div>
//   );
//   useEffect(()=>{ // this will re run every time search changes
//     if(newData!=='') update("desire", newData)
//  }, [newData])

//   return (
//     <>
//       <div className="row ">
//         <h4>Which aspect of your life, do you wish to improve?</h4>
//         {listItems}
//       </div>
//       {/* <h5>{newData}</h5> */}
//       {/* <div className="break" /> */}
//       <footer >
//       {/* {newData !== "" ?
//         <button className="btn btn-block prim" onClick={() => update("change", newData)}>Next</button> :
//         <button disabled alt="pick a choice from above" className="btn btn-block">Next</button>
//       } */}
//       </footer>
//     </>
//   );
// }
import { useState, useEffect } from "react";

export default function ({ data, update }) {
  const [newData, setState] = useState({
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
    } else if (value == "true") {
      setState(prevState => ({
        ...prevState,
        [name]: "false"
      }));
    }
    else if (value == "false") {
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
    console.log(e.target)
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
          style={{fontSize: "1.5rem", padding: "7px", maxWidth: "100%"}}
          className={props.v==""?"":"white-text"}>{props.l}</p>
        </div>
      </label>
    </div>
    );
  }

  return (
    <div>

      <div className="row ">
        <h3>Select all that describe you</h3>
        <Li
          n="s1"
          v={newData.s1}
          l="health"
        />
        <Li
          n="s2"
          v={newData.s2}
          l="wealth"
        />
        <Li
          n="s3"
          v={newData.s3}
          l="love"
        />
        <Li
          n="s4"
          v={newData.s4}
          l="happiness"
        />
      </div>
      {/* <div className="break" /> */}

      {/* {JSON.stringify(newData)} */}
      <footer >
      {Validataion(newData) ?
        <button className="btn btn-block prim" onClick={() => update("change", newData)}>Next</button> :
        <button disabled className="btn btn-block">Next</button>
      }
      
   </footer>
    </div>
  );
}