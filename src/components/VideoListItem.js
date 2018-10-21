import React, {Component} from 'react';
import '../App.css';


class VideoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    selectThisVideo(video) {
        this.props.videoSelect(video);
    }

    render() {
        const selectedVideo = this.props.selectedVideo;
        const video = this.props.video;
        return (
            <div className={
                (selectedVideo.etag === video.etag) ? "YoutubeApp__video-item videoActive" : "YoutubeApp__video-item inactive"}
                 onClick={() => {
                     this.selectThisVideo(video)
                 }}>
                <img src={video.snippet.thumbnails.medium.url}/>
                <span className="YoutubeApp__video-details">
                    <h4>{video.snippet.title}</h4>
                    <p>z kanału <span className="video-details__account"> {video.snippet.channelTitle}</span></p>
                </span>
                {(selectedVideo.etag === video.etag) && <span className="current-playing">Playing</span>}
            </div>
        );

    }
}

export default VideoListItem;