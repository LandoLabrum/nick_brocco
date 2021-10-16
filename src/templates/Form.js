import { useState, useEffect } from "react";
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

import axios from 'axios';
const subPageNum = 8

export default function App() {
  const [res, setRes] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    age_range: {},
    describe: {},
    desire: {},
    listen: {},
    teachable: {},
    willing: {},
    change: {},
    appointment: {},
  });
  function updateData(type, newData) {
    setPage((page) => page + 1);
    setData((data) => {
      return { ...data, [type]: newData };
    });

  }
  useEffect(()=>{
    if(JSON.stringify(data.appointment) != "{}") submit()
 }, [data.appointment])
  function backPage() {
    setPage((page) => page - 1);
  }
  function submit() {
    // alert(JSON.stringify(data))
    axios.post('/forms/', {
      method: 'post',
      body: data
    })
      .then(function (response) {
        console.log(response.data['status']);
        if(response.data['status']=='success'){
          setRes(<>
          <h4 style={{textTransform: "capitalize"}}>{response.data['status']}</h4>
          <p>Thank you for your interest in us. your appointment is successfully scheduled for: <span className="green-text">{response.data['appointment']}</span></p>
          </>
          )
        }else{
          setRes(
            <h4>{response.data['status']}</h4>
            )
        }
      })
  }
  return (
    <div className="container">
      <br />
      <small style={{ fontSize: "15px" }}>Progress</small>
      <div className="progress">
        <div style={{ width: 12.5 * page + "%" }} className="determinate indigo lighten-1"></div>
      </div>
      {res}
      <br />
      <div>
        {page === 1 && <One data={data.age_range} update={updateData} />}
        {page === 2 && (
          <Two data={data.describe} update={updateData} back={backPage} />
        )}
        {page === 3 && (
          <Three data={data.desire} update={updateData} back={backPage} />
        )}
        {page === 4 && (
          <Four data={data.listen} update={updateData} back={backPage} />
        )}
        {page === 5 && (
          <Five data={data.teachable} update={updateData} back={backPage} />
        )}
        {page === 6 && (
          <Six data={data.willing} update={updateData} back={backPage} />
        )}
        {page === 7 && (
          <Seven data={data.change} update={updateData} back={backPage} />
        )}
        {page === 8 && (
          <Eight data={data.appointment} update={updateData} back={backPage} />
        )}
      </div>
        <button className="btn btn-flat" onClick={() => backPage()}>
          <i className="material-icons left">arrow_back_ios</i> Previous</button>
          <small>{JSON.stringify(data)}</small>
    </div>
  );
}

