import React from "react";
import ReactDOM from "react-dom";
import Ireland from "./IrelandGallery";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Ireland />, div);
    ReactDOM.unmountComponentAtNode(div);
});
