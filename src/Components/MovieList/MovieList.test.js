import React from "react";
import { mount } from "enzyme";
import MovieList from "./MovieList";
import { GlobalProvider } from "../../Context/GlobalState";

describe("MovieList Testing", () => {
    let wrapper;
    const getMoviesBanner = jest.fn()
    wrapper = mount(
        <GlobalProvider value={{
            getMoviesBanner,
            getLatestMovies: jest.fn(),
            getUpcomingMovies: jest.fn(),
        }}>
            <MovieList />
        </GlobalProvider>
    )

    test("Render header in MovieList component", async () => {
        expect(wrapper.find(getMoviesBanner)).toEqual({});
    });

});