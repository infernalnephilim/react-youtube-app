import React, {Component} from 'react';
import '../App.css';
import VideoListItem from "./VideoListItem";


class VideoList extends Component {
    render() {
        if (this.props.loading) {
            return (
                <div className="YoutubeApp__loading">
                    <p>Loading List</p>
                </div>
            );
        }
        const items = this.props.videos.map((video) => {
                return (
                   <VideoListItem key={video.etag} video={video} selectedVideo={this.props.selectedVideo} videoSelect={this.props.onVideoSelect}/>

                );
            }
        );
        return (
          <section className="YoutubeApp__video-list">
              {items}
          </section>
        );

    }
}

export default VideoList;