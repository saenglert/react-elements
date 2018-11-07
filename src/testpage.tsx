import React = require("react");
import ReactDOM = require("react-dom");
import * as Elements from "./index";

const header = "Alpha";

const data = ["One", "Two", "Three"];

const Cell = (props: { num: number }) => (
  <div>
    <div>Test</div>
    <div>{props.num}</div>
  </div>
);

const list = [<Cell num={1} />, <Cell num={2} />, <Cell num={3} />];

const Page = () => (
  <div>
    <Elements.List header={header} data={data} />
    <Elements.SelectList
      header={header}
      data={list}
      selectedItems={[list[1]]}
      onItemClick={item => console.log(item)}
    />
  </div>
);

ReactDOM.render(<Page />, document.getElementById("react-root"));
