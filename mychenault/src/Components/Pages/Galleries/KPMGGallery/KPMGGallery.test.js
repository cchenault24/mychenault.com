import React from "react";
import ReactDOM from "react-dom";
import KPMG from "./KPMGGallery";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<KPMG />, div);
    ReactDOM.unmountComponentAtNode(div);
});
