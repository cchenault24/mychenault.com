import React from "react";
import ReactDOM from "react-dom";
import Italy from "./ItalyGallery";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Italy />, div);
    ReactDOM.unmountComponentAtNode(div);
});
