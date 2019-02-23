import React from "react";
import ReactDOM from "react-dom";
import France from "./FranceGallery";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<France />, div);
    ReactDOM.unmountComponentAtNode(div);
});
