import React from "react";
import { mount } from "enzyme";
import Footer from "./Footer";

describe("Footer Testing", () => {
    let wrapper;
    wrapper = mount(<Footer />)
    test("Render Footer component", () => {
        expect(wrapper.find("#footer-text").text()).toEqual("Copyright @ movie-app");
    });
});