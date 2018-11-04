import React = require("react");
import ReactDOM = require("react-dom");
import List from "./list";

interface Props {
  name: string;
}

const header = "Alpha";

const data = ["One", "Two", "Three"];

ReactDOM.render(
  <List header={header} data={data} />,
  document.getElementById("react-root")
);
