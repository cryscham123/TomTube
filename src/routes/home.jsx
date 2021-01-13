import React, { Component } from 'react';
import axios from "axios";
import Movie from "../movie";

class Home extends Component {
    state = {
        isLoading: true,
        items: []
    };
    getMovies = async() => {
        const  {data:{items}}  = await axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA27KL5mOLc2XfoX9JpmjuInlR9jXfhKmg");
        this.setState({ items, isLoading: false });
    }
    componentDidMount() {
        this.getMovies();
      }
    render() {
        const { isLoading, items } = this.state;
        console.log(items);
        return (
            <div className="homeGrid">
                <span className="homeTitle">Most Viewed</span>
                <div className="movies">
                    {isLoading ? "Loading..." : items.map(item => {
                        return <Movie key={item.id}
                            id={item.id}
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

export default Home;