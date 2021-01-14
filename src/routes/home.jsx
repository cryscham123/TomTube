import React, { Component } from 'react';
import axios from "axios";
import Movies from "../movies";

class Home extends Component {
    state = {
        isLoading: true,
        items: []
    };
    getMovies = async() => {
        const  {data:{items}}  = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        this.setState({ items, isLoading: false });
    }
    componentDidMount() {
        this.getMovies();
      }
    render() {
        const { isLoading, items } = this.state;
        return (
            <div className="homeGrid">
                <span className="homeTitle">Most Viewed</span>
                {isLoading ? "Loading..." : <Movies items={ items }/>}
            </div>
        );
    }
}

export default Home;