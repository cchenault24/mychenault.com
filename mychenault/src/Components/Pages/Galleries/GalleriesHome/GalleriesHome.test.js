import React from "react";
import ReactDOM from "react-dom";
import Galleries from "./GalleriesHome";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Galleries />, div);
    ReactDOM.unmountComponentAtNode(div);
});
