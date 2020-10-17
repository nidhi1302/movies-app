import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import movies from "../movies.json";

// Initial state
const initialState = {
    moviesBanner: [],
    latestMoviesList: [],
    upcomingMoviesList: [],
    movieDetails: {}
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function getMoviesBanner() {
        dispatch({
            type: 'GET_MOVIES_BANNER',
            payload: movies.moviesBanner
        });
    }

    function getLatestMovies() {
        let latestMoviesData = movies.moviesList.filter(o => o.category === "latest");

        dispatch({
            type: 'GET_LATEST_MOVIES',
            payload: latestMoviesData
        });
    }

    function getUpcomingMovies() {
        let upcomingMoviesData = movies.moviesList.filter(o => o.category === "upcoming");
        dispatch({
            type: 'GET_UPCOMING_MOVIES',
            payload: upcomingMoviesData
        });
    }

    function getMovieDetails(id) {
        let moviesData = movies.moviesList.find(o =>
            o.id.toString() === id
        );
        dispatch({
            type: 'MOVIE_DETAILS',
            payload: moviesData
        });
    }

    function getMoviesBySearch(value, tab) {
        const filtereMovie = movies.moviesList.filter(item => {
            return (
                (item.title.toLowerCase().indexOf(value) >= 0 ||
                    item.genres.toLowerCase().indexOf(value) >= 0 ||
                    item.release.toLowerCase().indexOf(value) >= 0
                ) &&
                item.category === tab
            )
        });
        dispatch({
            type: `SEARCH_${tab.toUpperCase()}_MOVIES`,
            payload: filtereMovie
        });

    }
    return (<GlobalContext.Provider value={{
        moviesBanner: state.moviesBanner,
        latestMoviesList: state.latestMoviesList,
        upcomingMoviesList: state.upcomingMoviesList,
        getMoviesBanner,
        getLatestMovies,
        getUpcomingMovies,
        getMovieDetails,
        movieDetails: state.movieDetails,
        getMoviesBySearch
    }}>
        {children}
    </GlobalContext.Provider>
    );
}