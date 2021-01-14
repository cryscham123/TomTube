import React, { useEffect, useState } from 'react';
import axios from "axios";
import Movie from "../movie";

const Search = ({ location: { pathname } }) => {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    async function getMovies() {
        const { data: { items } } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${pathname.slice(8)}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        setLoading(false);
        setItems(items);
    };
    useEffect(getMovies, [pathname]);
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

export default Search;