import { useState } from "react";
// import { ProgressBar } from 'react-materialize';
import "../App.css"
import One from "./forms/One";
import Two from "./forms/Two"
import Three from "./forms/Three";
import Four from "./forms/Four";
import Five from "./forms/Five";
import Six from "./forms/Six";
import Seven from "./forms/Seven";
import Eight from "./forms/Eight";

import Submit from "./forms/Submit"
const subPageNum = 9

export default function App() {
  const [page, setPage] = useState(1);
  // console.log(page)
  const [data, setData] = useState({
    q1: {},
    q2: {},
    q3: {},
    q4: {},
    q5: {},
    q6: {},
    q7: {},
    q8: {},
  });
  function updateData(type, newData) {
    if (page === subPageNum) return;
    setPage((page) => page + 1);
    setData((data) => {
      return { ...data, [type]: newData };
    });
  }
  function backPage() {
    setPage((page) => page - 1);
  }

  function submit() {
    alert(JSON.stringify(data))
    fetch("/api/form", { method: "POST", body: JSON.stringify(data) });
  }
  return (
    <div className="container">
      

      <br />
      <small style={{ fontSize: "15px" }}>Progress</small>
      <div className="progress">
        <div style={{width: 12.5*page+"%"}} className="determinate indigo lighten-1"></div>
      </div>
      <br />
      {/* the content goes here */}
      <div>
        {page === 1 && <One data={data.q1} update={updateData} />}

        {page === 2 && (
          <Two data={data.q2} update={updateData} back={backPage} />
        )}

        {page === 3 && (
          <Three data={data.q3} update={updateData} back={backPage} />
        )}

        {page === 4 && (
          <Four data={data.q4} update={updateData} back={backPage} />
        )}

        {page === 5 && (
          <Five data={data.q5} update={updateData} back={backPage} />
        )}

        {page === 6 && (
          <Six data={data.q6} update={updateData} back={backPage} />
        )}

        {page === 7 && (
          <Seven data={data.q7} update={updateData} back={backPage} />
        )}

        {page === 8 && (
          <Eight data={data.q8} update={updateData} back={backPage} />
        )}
        

        {page === subPageNum && <Submit back={backPage} />}
      </div>
      {page !== 1 && 
    
      <button className="btn btn-flat" onClick={() => backPage()}>
        <i className="material-icons left">arrow_back_ios</i> Previous</button>
       }


      {page === subPageNum && (<>
        
        <br/>
        <br/>
        <button type="submit" className="btn btn-block prim"onClick={submit}>
          Submit
        </button>
        </>
      )}
    
      
    </div>
  );
}

