import React from 'react';
import ImagesGrid from '../../CommonComponents/ImagesGrid';

function LatestMovies(props) {
    const handleMovieCardClick = (id) => {
        props.history.push(`/movie-details/${id}`)
    }
    return (
        <ImagesGrid data={props.LatestMoviesData} handleCardClick={handleMovieCardClick} />
    );
}
export default LatestMovies;