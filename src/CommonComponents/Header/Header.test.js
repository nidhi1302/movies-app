import React from "react";
import { mount } from "enzyme";
import Header from "./Header";

describe("Header Testing", () => {
    let wrapper;
    wrapper = mount(<Header search={true} />)

    test("Render header component", async () => {
        expect(wrapper.find("img").prop('src')).toEqual("logo.svg");
        expect(wrapper.find("#title-text").at(1).text()).toEqual("MOVIE-APP");
        expect(wrapper.find("#search-container").prop('className')).toBe("makeStyles-search-4");
    });

});