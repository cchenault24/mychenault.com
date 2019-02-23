import React from "react";
import ReactDOM from "react-dom";
import SAP from "./SAPGallery";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SAP />, div);
    ReactDOM.unmountComponentAtNode(div);
});
