import React = require("react");
import Ramda = require("ramda");
import { List, ListProps, ListItem } from "../list";

interface Props {}

export type SelectListProps = Props & ListProps;

interface State {
  selectedItems: Array<ListItem>;
}

export class SelectList extends React.Component<SelectListProps, State> {
  constructor(props: SelectListProps) {
    super(props);

    this.state = {
      selectedItems: this.props.selectedItems ? this.props.selectedItems : []
    };
  }

  handleItemClick = (item: ListItem) => {
    if (Ramda.contains(item, this.state.selectedItems)) {
      this.setState({
        selectedItems: this.state.selectedItems.filter(
          sitem => !Ramda.equals(sitem, item)
        )
      });
    } else {
      this.setState({
        selectedItems: this.state.selectedItems.concat(item)
      });
    }

    this.props.onItemClick && this.props.onItemClick(item);
  };
  render = () => (
    <List
      className={this.props.className}
      header={this.props.header}
      data={this.props.data}
      selectedItems={this.state.selectedItems}
      onItemClick={this.handleItemClick}
    />
  );
}
