import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MovieList from './Components/MovieList';
import Footer from './CommonComponents/Footer';
import MovieDetails from './Components/MovieDetails/MovieDetails';

export default function Navigations(props) {
    return (
        <Router >
            <Switch>
                <Route exact path="/" component={MovieList} history={props.history} />
                <Route path="/movie-details/:id" component={MovieDetails} history={props.history} />
            </Switch>
            <Footer />
        </Router>
    )
}
