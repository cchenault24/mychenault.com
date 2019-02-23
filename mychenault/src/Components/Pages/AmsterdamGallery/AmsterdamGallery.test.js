import React from "react";
import ReactDOM from "react-dom";
import Amsterdam from "./AmsterdamGallery";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Amsterdam />, div);
    ReactDOM.unmountComponentAtNode(div);
});
