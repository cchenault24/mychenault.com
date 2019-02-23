import React from "react";
import ReactDOM from "react-dom";
import Germany from "./GermanyGallery";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Germany />, div);
    ReactDOM.unmountComponentAtNode(div);
});
