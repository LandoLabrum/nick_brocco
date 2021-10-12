import React from "react";
import { Link } from "react-router-dom";
import lead from "/Users/landolabrum/code/clients/nick_brocco/main/src/media/lead_the_way.png"
import nick from "/Users/landolabrum/code/clients/nick_brocco/main/src/media/lead_the_way_nick.png"
import VideoSection from "./components/videoSection"
export default function Home() {
    return <div>
        {/* <h2>Home</h2> */}
        <section className="">
            <div className="row  blue lighten-4 valign-wrapper">
                <div className="col s12 m4 offset-m1 center hide-on-small-and-down">
                    <Link to="/form">
                        <div className="break" />
                        <img className="responsive-img" style={{ height: "300px" }} src={lead} />
                            <h6 className="max">FIND OUT EXACTLY HOW YOU CAN MANIFEST YOUR DESIRES.</h6>
                        <br />
                        <a class="waves-effect waves-light btn green accent-3">TAKE THE QUIZ <i class="material-icons">arrow_forward</i></a>
                        <div className="break" />
                    </Link>
                </div>
                <div className="col s12 m6">
                    <div className="container">
                    {/* <h4>Lorem Ipsum</h4> */}
                        <img className="responsive-img blue lighten-3" src={nick} />
                    </div>
                </div>
                <div className="break" />
            </div>
            <div className="center hide-on-med-and-up">
                <img className="responsive-img" style={{ height: "300px" }} src={lead} />
                <Link to="/form">
                    <a class="waves-effect waves-light btn green accent-3">TAKE THE QUIZ <i class="material-icons">arrow_forward</i></a>
                    <div className="break" />
                </Link>
            </div>
        </section>
        <VideoSection />

    </div>;
}

