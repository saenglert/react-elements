import React = require("react");
import classnames = require("classnames");
import Ramda = require("ramda");
import ostyle = require("./index.css");

export type ListItem = string | JSX.Element;
export interface ListProps {
  className?: string;
  header?: string | JSX.Element;
  data: Array<ListItem>;
  onItemClick?: (item: ListItem) => void;
  selectedItems?: Array<ListItem>;
}

export class List extends React.Component<ListProps> {
  renderHeader = (header: string | JSX.Element) => (
    <div className={ostyle["list-header"]}>{header}</div>
  );

  isCellSelected = (data: ListItem) =>
    this.props.selectedItems
      ? Ramda.contains(data, this.props.selectedItems)
      : false;
  renderCell = (data: string | JSX.Element, index: number) => (
    <div
      key={`re-list-cell-${index}`}
      className={classnames(ostyle["list-cell"], this.props.className, {
        [ostyle.selected]: this.isCellSelected(data)
      })}
      onClick={() =>
        this.props.onItemClick ? this.props.onItemClick(data) : undefined
      }
    >
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
