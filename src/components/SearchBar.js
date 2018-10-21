import React, {Component} from 'react';
import '../App.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="YoutubeApp__search">
                <form onSubmit={this.props.getVideo}>
                    <input type='text' name="term" placeholder="What would you like to watch?"/>
                    <button>Szukaj</button>
                </form>
            </div>
        );

    }
}

export default SearchBar;