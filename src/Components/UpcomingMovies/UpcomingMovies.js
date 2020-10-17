import React from 'react'
import ImagesGrid from '../../CommonComponents/ImagesGrid'

function UpcomingMovies(props) {
    const handleMovieCardClick = (id) => {
        props.history.push(`/movie-details/${id}`);
    }
    return (
        <ImagesGrid data={props.UpcomingMoviesData} handleCardClick={handleMovieCardClick} />
    )
}
export default UpcomingMovies;