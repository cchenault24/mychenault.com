import React from "react";
import ReactDOM from "react-dom";
import ContentHolder from "./ContentHolder";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ContentHolder />, div);
    ReactDOM.unmountComponentAtNode(div);
});
