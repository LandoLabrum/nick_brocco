import ReactPlayer from 'react-player/youtube'


export default function VideoSection() {

    return (
        <div className="row card">
            <div className="col s12">
                <h3>Student Stories</h3>
            </div>
            <div className="col s12 m4">
                <div className="video-container">
                    <ReactPlayer url='https://www.youtube.com/watch?v=e7OdXMhv9JE' />
                </div>
            </div>
            {/* <div className="col s12 m4">
                <video src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/h264.mov" controls></video>
            </div>
            <div className="col s12 m4">
                <video src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/h264.mov" controls></video>
            </div> */}
        </div>
    )

}