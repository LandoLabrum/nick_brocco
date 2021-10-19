import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackgroundCover from 'background-cover';
import playInlineVideo from 'iphone-inline-video';
import insertRule from 'insert-rule';

import BannerVid from '../../media/testimonial.mp4'
import banner from '../../media/lead_the_way.png'


const iOSNavigator = typeof navigator !== 'undefined' && navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
const iOSVersion = iOSNavigator ? iOSNavigator[1] : null;

const noop = () => { };

const absolute100 = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

class BackgroundVideo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.startTimeIsSet = false;
  }

  componentDidMount() {
    if (this.props.playsInline && iOSVersion) {
      const hasAudio = !(iOSVersion && iOSVersion < 10 && this.props.autoPlay && this.props.muted); // allow autoplay on iOS < 10 for silent videos
      const requireInteractionOnTablet = false;

      playInlineVideo(this.video, hasAudio, requireInteractionOnTablet);
      insertRule(['video::-webkit-media-controls-start-playback-button', '.IIV::-webkit-media-controls-play-button'], {
        display: 'none',
      });
    }

    if (this.video) {
      if (this.video.readyState !== 4) {
        this.video.addEventListener('loadedmetadata', this._handleVideoReady);
      } else {
        this._handleVideoReady();
      }

      this.video.addEventListener('play', this._handleOnPlay);
      this.video.addEventListener('pause', this._handleOnPause);
      this.video.volume = this.props.volume;
    }
  }

  componentDidUpdate(prevProps) {
    if (
      (this.props.containerWidth !== prevProps.containerWidth ||
        this.props.containerHeight !== prevProps.containerHeight) &&
      !this.props.disableBackgroundCover
    ) {
      this._resize();
    }

    if (this.video && this.props.volume !== prevProps.volume) {
      this.video.volume = this.props.volume;
    }
  }

  componentWillUnmount() {
    if (!this.video) return;
    this.video.removeEventListener('loadedmetadata', this._handleVideoReady);
    this.video.removeEventListener('play', this._handleOnPlay);
    this.video.removeEventListener('pause', this._handleOnPause);
  }

  _handleVideoReady = () => {
    if (!this.props.disableBackgroundCover) {
      this._resize();
    }

    this.setState({ visible: true });
    this.props.startTime && this.setCurrentTime(this.props.startTime);
    this.props.autoPlay && this.play();
    this.video && this.props.onReady(this.video.duration);
  };

  _resize() {
    this.video && BackgroundCover(this.video, this.container, this.props.horizontalAlign, this.props.verticalAlign);
  }

  _handleOnPlay = () => {
    this.props.onPlay();
  };

  _handleOnPause = () => {
    this.props.onPause();
  };

  _handleTimeUpdate = () => {
    if (!this.video) return;
    iOSVersion && this._handleIOSStartTime();
    const currentTime = this.video.currentTime;
    const duration = this.video.duration;
    const progress = currentTime / duration;
    this.props.onTimeUpdate(currentTime, progress, duration);
  };

  _handleVideoEnd = () => {
    this.props.onEnd();
  };

  _handleIOSStartTime() {
    if (!this.video) return;
    if (this.video.currentTime < this.props.startTime && !this.startTimeIsSet) {
      this.setCurrentTime(this.props.startTime);
      this.startTimeIsSet = true;
    }
  }

  play() {
    this.video && this.video.play();
  }

  pause() {
    this.video && this.video.pause();
  }

  togglePlay() {
    if (!this.video) return;
    this.video.paused ? this.play() : this.pause();
  }

  isPaused() {
    return this.video ? this.video.paused : false;
  }

  mute() {
    if (!this.video) return;
    this.video.muted = true;
    this.props.onMute();
  }

  unmute() {
    if (!this.video) return;
    this.video.muted = false;
    this.props.onUnmute();
  }

  toggleMute() {
    if (!this.video) return;
    this.video.muted ? this.unmute() : this.mute();
  }

  isMuted() {
    return this.video ? this.video.muted : false;
  }

  setCurrentTime(val) {
    if (!this.video) return;
    this.video.currentTime = val;
  }

  render() {
    const visibility = this.state.visible ? 'visible' : 'hidden';

    const videoProps = {
      ref: (v) => (this.video = v),
      src: typeof this.props.src === 'string' ? this.props.src : null,
      preload: this.props.preload,
      poster: this.props.poster,
      muted: this.props.muted,
      loop: this.props.loop,
      onTimeUpdate: this._handleTimeUpdate,
      onEnded: this._handleVideoEnd,
      ...Object.assign(this.props.extraVideoElementProps, {
        playsInline: this.props.playsInline,
      }),
    };

    return (
      <div
        ref={(r) => (this.container = r)}
        className={`BackgroundVideo ${this.props.className}`}
        style={Object.assign({ ...absolute100, visibility }, this.props.style)}
        onClick={this.props.onClick}
        onKeyPress={this.props.onKeyPress}
        tabIndex={this.props.tabIndex}
      >
        {typeof this.props.src === 'object' ? (
          <video {...videoProps}>
            {this.props.src.map((source, key) => (
              <source key={key} {...source} />
            ))}
          </video>
        ) : (
            <video {...videoProps} />
          )}
      </div>
    );
  }
}

BackgroundVideo.propTypes = {
  playsInline: PropTypes.bool, // play inline on iPhone. avoid triggering native video player
  disableBackgroundCover: PropTypes.bool, // do not apply cover effect (e.g. disable it for specific screen resolution or aspect ratio)
  style: PropTypes.object,
  className: PropTypes.string,
  containerWidth: PropTypes.number,
  containerHeight: PropTypes.number,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  poster: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  horizontalAlign: PropTypes.number,
  verticalAlign: PropTypes.number,
  preload: PropTypes.string,
  muted: PropTypes.bool, // required to be set to true for auto play on mobile in combination with 'autoPlay' option
  volume: PropTypes.number,
  loop: PropTypes.bool,
  autoPlay: PropTypes.bool,
  extraVideoElementProps: PropTypes.object,
  startTime: PropTypes.number,
  tabIndex: PropTypes.number,
  onReady: PropTypes.func, // passes back `duration`
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onMute: PropTypes.func,
  onUnmute: PropTypes.func,
  onTimeUpdate: PropTypes.func, // passes back `currentTime`, `progress` and `duration`
  onEnd: PropTypes.func,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
};

BackgroundVideo.defaultProps = {
  playsInline: true,
  disableBackgroundCover: false,
  style: {},
  horizontalAlign: 0.5,
  verticalAlign: 0.5,
  preload: 'auto',
  muted: false,
  volume: 1,
  loop: true,
  autoPlay: true,
  extraVideoElementProps: {},
  startTime: 0,
  tabIndex: 0,
  onReady: noop,
  onPlay: noop,
  onPause: noop,
  onMute: noop,
  onUnmute: noop,
  onTimeUpdate: noop,
  onEnd: noop,
  onClick: noop,
  onKeyPress: noop,
};


export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: undefined,
      isMuted: undefined,
      progress: 0,
      currentTime: 0,
      duration: 0,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
    // console.log(this.props.isPlaying)
  }

  componentDidMount() {
    this.setState({
      isPlaying: !this.player.isPaused,
      isMuted: this.player.isMuted,
    });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  };

  handleOnPlay = () => {
    this.setState({ isPlaying: true });
  };

  handleOnPause = () => {
    this.setState({ isPlaying: false });
  };

  handleTimeUpdate = (currentTime, progress, duration) => {
    this.setState({
      progress,
      currentTime,
      duration,
    });
  };
  handleOnMute = () => {
    this.setState({ isMuted: true });
  };

  handleOnUnmute = () => {
    this.setState({ isMuted: false });
  };

  togglePlay = () => {
    this.player.togglePlay();
  };

  toggleMute = () => {
    this.player.toggleMute();
  };

  render(props) {

    return (
      <div className="video-container">
        <BackgroundVideo
          ref={p => this.player = p}
          containerWidth={this.state.windowWidth}
          containerHeight={this.state.windowHeight}
          src={this.props.src}
          poster={this.props.banner}
          onPlay={this.handleOnPlay}
          onPause={this.handleOnPause}
          onMute={this.handleOnMute}
          onUnmute={this.handleOnUnmute}
          onTimeUpdate={this.handleTimeUpdate}
          startTime={10}
          autoPlay={this.props.autoplay}
          volume={0.5}
        />
        {this.props.controls?
              <span style={{
                position: 'absolute',
                right: 0,
                bottom: 20,
                display: 'flex',
                alignItems: 'center',
              }}>
                    {/* <progress value={this.state.progress}/>&nbsp;&nbsp;&nbsp;&nbsp;  */}
                <span onClick={this.togglePlay}>
                  {this.state.isPlaying ? 
                  
                    <span className="material-icons white-text">pause</span> : <span className="material-icons white-text">play_arrow</span>}
                </span>
                <span  style={{ width: 70 }} onClick={this.toggleMute}>
                  {this.state.isMuted ?
                    <span className="material-icons white-text">volume_off</span> : <span className="material-icons white-text">volume_up</span>
                    }
                </span>
                {/* <time>{this.state.currentTime} / {this.state.duration}</time>  */}
              </span>:''
        }
  
      </div>
    )
  }
}

