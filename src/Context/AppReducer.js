export default (state, action) => {
    switch (action.type) {
        case 'GET_MOVIES_BANNER':
            return {
                ...state,
                moviesBanner: action.payload
            }
        case 'GET_LATEST_MOVIES':
            return {
                ...state,
                latestMoviesList: action.payload
            }
        case 'GET_UPCOMING_MOVIES':
            return {
                ...state,
                upcomingMoviesList: action.payload
            }
        case 'MOVIE_DETAILS':
            return {
                ...state,
                movieDetails: action.payload
            }
        case 'SEARCH_LATEST_MOVIES':
            return {
                ...state,
                latestMoviesList: action.payload
            }
        case 'SEARCH_UPCOMING_MOVIES':
            return {
                ...state,
                upcomingMoviesList: action.payload
            }
        default:
            return state;
    }
}