import React from 'react';
import Movie from './movie';

const Movies = ({items}) => {
    return (
        <div className="movies">
            {items.map(item => {
                return <Movie key={typeof(item.id) === typeof("") ? item.id : item.id.videoId}
                    id={typeof(item.id) === typeof("") ? item.id : item.id.videoId}
                    title={item.snippet.title}
                    uploader={item.snippet.channelTitle}
                    des={item.snippet.description}
                    thumbnailM={item.snippet.thumbnails.medium}
                    items={items}
                />
            })}
        </div>
    );
};

export default Movies;