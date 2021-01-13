import React from 'react';
import { Link } from "react-router-dom";

const Movie = ({ id, title, uploader, thumbnailM, des }) => {
    return (
        <Link className="movie" to={{
            pathname: `/details/${id}`,
            state: {
                title,
                uploader,
                fromNavigation: true
            }
        }}>
            <img className="movie__thumb" src={thumbnailM.url} alt={title} />
            <div className="movie__info">
                <div className="info">
                    <span className="movie__title">{title}</span>
                    <p className="movie__uploader">{uploader}</p>
                </div>
                <p className="movie__des">{des.slice(0,100)}...</p>
            </div>
        </Link>
    );
};

export default Movie;