import React, { useContext, useEffect } from 'react';
import Header from '../../CommonComponents/Header';
import Carousel from '../../CommonComponents/Carousel';
import useSlideshow from '../../Hooks/useSlider';
import TabsView from '../../CommonComponents/TabsView';
import LatestMovies from '../LatestMovies';
import UpcomingMovies from '../UpcomingMovies';
import { GlobalContext } from '../../Context/GlobalState';
import NoData from '../../CommonComponents/NoData';

const categories = [
    "Latest Movies",
    "Upcoming Movies"
]

export default function MovieList(props) {
    const [value, setValue] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState("");
    const { moviesBanner, getMoviesBanner, getLatestMovies, getUpcomingMovies, upcomingMoviesList, latestMoviesList, getMoviesBySearch } = useContext(GlobalContext);
    const { currIndex, updateSlide } = useSlideshow(moviesBanner);

    useEffect(() => {
        getMoviesBanner()
        getLatestMovies()
        getUpcomingMovies()
    }, [])

    const handleRightClick = () => {
        updateSlide('next')
    }

    const handleLeftClick = () => {
        updateSlide('previous')
    }

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSearchTextChange = (e) => {
        let tab
        if (value === 0) {
            tab = "latest"
        }
        else if (value === 1) {
            tab = "upcoming"
        }
        setSearchValue(e.target.value);
        getMoviesBySearch(e.target.value, tab);

    }

    if (moviesBanner.length === 0 && latestMoviesList.length === 0 && upcomingMoviesList.length === 0) {
        return (
            <NoData />
        )
    }

    return (
        <>
            <Header id="search-header" search={true} placeholder={"Search by title, genres..."} handleSearchTextChange={handleSearchTextChange} searchValue={searchValue} />
            <Carousel source={moviesBanner[currIndex].src}
                handleRightClick={handleRightClick}
                handleLeftClick={handleLeftClick}
                images={moviesBanner}
                activeImage={currIndex}
            />
            <TabsView categories={categories} handleChange={handleTabChange} value={value} />
            {
                value === 0 ?
                    <LatestMovies LatestMoviesData={latestMoviesList} history={props.history} />
                    :
                    <UpcomingMovies UpcomingMoviesData={upcomingMoviesList} history={props.history} />
            }
        </>
    )
}
