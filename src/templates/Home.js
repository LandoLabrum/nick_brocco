import React from "react";
import { Link } from "react-router-dom";
import lead from "../media/lead_the_way.png"
import nick from "../media/lead_the_way_nick.png"
import VideoSection from "./components/videoSection"
import src from '../media/testimonial.mp4'
import cover from '../media/lead_the_way.png'

export default function Home() {
    return <div>
        {/* <h2>Home</h2> */}
        <section className="card">
            <div className="row gradient-container">

                <div style={{paddingTop: "5em"}}className="col s12 m6  center hide-on-small-and-down">
                    <Link to="/form">
                       
                        <img className="responsive-img" style={{ height: "250px" }} src={lead} />
                        <h6 className="max">FIND OUT EXACTLY HOW YOU CAN MANIFEST YOUR DESIRES.</h6>
                        <br />
                        <div className="waves-effect waves-light btn green accent-3">TAKE THE QUIZ <i className="material-icons">arrow_forward</i></div>

                    </Link>

                </div>
                <div className="center hide-on-med-and-up container">
                    <br/>
                    <br/>
                    <br/>
                    <img className="responsive-img" style={{ height: "250px" }} src={lead} />
                    <h6 className="max">FIND OUT EXACTLY HOW YOU CAN MANIFEST YOUR DESIRES.</h6>
                        <br />
                    <Link to="/form">
                        <div className="waves-effect waves-light btn btn-block green accent-3">TAKE THE QUIZ <i className="material-icons">arrow_forward</i></div>
                    </Link>
                    <br />
                    <br />
                </div>
                <div className="col s12 m6">
                    <div className="nick-container">
                        {/* <h4>Lorem Ipsum</h4> */}
                        <img className="responsive-img nick" src={nick} />
                        {/* <hr /> */}
                    </div>
                </div>

            </div>

        </section>
        <div className="row">
        <div className="col s12 m6">
            <h5>Client Testimonials</h5>
        <VideoSection src={src} cover={cover} autoplay={false} controls={true}/>
        <div className="break" />
        </div>
        </div>
        <div style={{ bottom: "0", width: "100%", textAlign: "center" }}>
            <h6>www.MyRealityEquation.com</h6>
            <br />
        </div>
    </div>;
}

