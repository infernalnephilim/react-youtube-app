import React, {Component} from 'react';
import logo from './logo.svg';
import YTSearch from 'youtube-api-search';
import './App.css';
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";

const API_KEY = "";
const maxResults = 10;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
        this.getData("");
    }

    getData(term) {
        YTSearch({key: API_KEY, term: term, maxResults: 15}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
            console.log(videos);
        });
    }

    searchVideo = async (ev) => {
        ev.preventDefault();
        this.state = {
            videos: [],
            selectedVideo: null,
        };
        const term = ev.target.elements.term.value;
        this.getData(term);
    };

    selectVideo(video) {
        this.setState({
            selectedVideo: video,
        });
    }

    render() {
        return (
            <div className="YoutubeApp">
                <header className="YoutubeApp__header">
                    <h1>React YouTube App</h1>
                </header>
                <SearchBar getVideo={this.searchVideo}/>
                <div className="YoutubeApp__content">
                    <VideoPlayer selectedVideo={this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos} selectedVideo={this.state.selectedVideo}
                               onVideoSelect={(userSelected) => {
                                   this.selectVideo(userSelected)
                               }}/>
                </div>
            </div>
        );
    }
}

export default App;
