import React, { Component } from 'react';
import axios from "axios";
import Movie from "../movie";

class Search extends Component {
    state = {
        isLoading: true,
        items: [],
        pageName: "",
    };
    getMovies = async () => {
        const { location: { pathname } } = this.props;
        const  {data:{items}}  = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${pathname.slice(8)}&type=video&key=AIzaSyA27KL5mOLc2XfoX9JpmjuInlR9jXfhKmg`);
        this.setState({ items, isLoading: false, pageName: pathname.slice(8) });
        console.log(this.state.pageName);
    }
    componentDidMount() {
        this.getMovies();
    }
    bugfix() {
        const { location: { pathname } } = this.props;
        if (pathname !== this.state.pageName) {
            this.getMovies();
        } else {
            return null;
        }
    }
    render() {
        const { isLoading, items } = this.state;
        return (
            <div className="homeGrid">
                <span className="homeTitle">Results</span>
                <div className="movies">
                    {isLoading ? "Loading..." : items.map(item => {
                        return <Movie
                            key={item.id.videoId}
                            id={item.id.videoId}
                            title={item.snippet.title}
                            uploader={item.snippet.channelTitle}
                            des={item.snippet.description}
                            thumbnailM={item.snippet.thumbnails.medium}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Search;