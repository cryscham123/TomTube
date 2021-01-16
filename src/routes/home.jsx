import React, { useState, useEffect } from 'react';
import Movies from "../components/movies";
import Youtube from '../service/youtube';

const Home = ({ location: { pathname } }) => {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY)
    const getMovies = () => {
        if (pathname !== "/home") {
            youtube.search(pathname)
            .then(items => setItems(items));;
        } else {
            youtube.mostViewed()
            .then(items => setItems(items));
        }
        setLoading(false);
    };
    useEffect(getMovies, [pathname]);
    return (
        <div className="homeGrid">
            <span className="homeTitle">{pathname !== "/home" ? "Search..." : "Most Viewed..."}</span>
            {isLoading ? "Loading..." : <Movies items={items} />}
        </div>
    );
};

export default Home;