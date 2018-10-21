import React, {Component} from 'react';
import '../App.css';


class VideoPlayer extends Component {
    render() {
        if (!this.props.selectedVideo) {
            return (
                <div className="YoutubeApp__loading">
                    {/*<p>Loading</p>*/}
                </div>
            );
        }
        const videoID = this.props.selectedVideo.id.videoId;
        const videoURL = `https://youtube.com/embed/${videoID}?autoplay=1`;
        return (
            <section className="YoutubeApp__video-player">
                <iframe src={videoURL}></iframe>
            </section>
        );
    }
}

export default VideoPlayer;