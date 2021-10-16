import { useState } from "react";
import PhoneInput from 'react-phone-number-input/input'
import VideoSection from "../components/videoSection"
import src from '../../media/contact.mp4'
import cover from '../../media/lead_the_way.png'

export default function ({ data, update }) {

  const [newData, setState] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      date: "",
      time: ""
    });
  const errList = []
  const [err, setErr] = useState('')

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleTel = e => {
    setState(prevState => ({
      ...prevState,
      ['tel']: e
    }));
  };

  function handleErrors() {
    let k
    for (k in newData) {
      if(k=='email'){
        if(!newData[k].includes('@') && !newData[k].includes('@')){
          errList.push(k + " Does not contain @ or .")
        }
      }
      if (newData[k].length <= 3) {
        errList.push(k + " not long enough")
      }
    }
    const er = errList.map((e) =>
      <span key={e}> {e}<br /></span>
    );
    if (errList.length != 0) {
      setErr(<small className="orange-text">{er}</small>)
    }else{
      update("appointment", newData)
    }
  }
  return (<>



 <VideoSection src={src} cover={cover} autoplay={true} controls={false}/>
        <hr/>




    <h4>Schedule a consultation</h4>
    <div className="card">
      <div className="row card-content">
        <span className="orange-text">{err}</span>
        <div className="col s6">

          First Name
          <input
            value={newData.firstName}
            type="text"
            onChange={handleChange}
            name="firstName"
          />
        </div>
        <div className="col s6">
          Last Name
          <input
            value={newData.lastName}
            type="text"
            onChange={handleChange}
            name="lastName"
          />
        </div>
        <div className="col s12">
          Phone Number
          {/* <input
            value={newData.tel}
            type="tel"
            onChange={handleChange}
            name="tel"
            maxLength="16"
          /> */}
          <PhoneInput
            country="US"
            // value={tel}
            // onChange={setTel} 
            maxLength="14"
            value={newData.tel}
            type="tel"
            onChange={handleTel}
          />
        </div>
        <div className="col s12">
          Email
          <input
            value={newData.email}
            type="email"
            onChange={handleChange}
            name="email"
          /></div>
        <div className="col s6">
          Date
          <input
            type="date"
            value={newData.date}
            name="date"
            onChange={handleChange}
          /></div>
        <div className="col s6">
          Time
          <input
            type="time"
            value={newData.time}
            name="time"
            onChange={handleChange}
          />
          <br />
          <br />
        </div>
      </div>
    </div>
    {/* <Disp/> */}
    {/* {JSON.stringify(newData)}<br /> */}
    {/* <button className="btn btn-block prim" onClick={() => update("appointment", newData)}>Submit</button>  */}
      <button className="btn btn-block prim" onClick={handleErrors}>submit</button> 
  </>
  );
}