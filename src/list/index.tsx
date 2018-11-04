import React = require("react");
import classnames = require("classnames");
import ostyle = require("./index.css");

interface Props {
  className?: string;
  header?: string | JSX.Element;
  data: Array<string | JSX.Element>;
}

export default class List extends React.Component<Props> {
  renderHeader = (header: string | JSX.Element) => (
    <div className={ostyle["list-header"]}>{header}</div>
  );
  renderCell = (data: string | JSX.Element, index: number) => (
    <div key={`re-list-cell-${index}`} className={ostyle["list-cell"]}>
      {data}
    </div>
  );
  render = () => (
    <div className={classnames(this.props.className, ostyle.list)}>
      {this.props.header ? this.renderHeader(this.props.header) : undefined}
      <div className={ostyle["list-body"]}>
        {this.props.data.map((datum, index) => this.renderCell(datum, index))}
      </div>
    </div>
  );
}
