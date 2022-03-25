import React from "react";
import Checkbox from "../checkbox/checkbox";
import withContext from "./with-context-cell";
import PropTypes from "prop-types";

const Cell = ({ item, column, selected, onSelect }) => {
  const formatter = column.formatter;
  const isSelectableCell = typeof onSelect === "function";
  const isFormattedCell = typeof formatter === "function";

  if (isSelectableCell && column.name === "selectable") {
    return (
      <td>
        <Checkbox
          onClick={(e) => onSelect(e, item)}
          checked={selected}
          aria-label="Select Item"
        />
      </td>
    );
  }

  if (isFormattedCell) {
    return <td>{formatter(item[column.name])}</td>;
  }

  return <td>{item[column.name]}</td>;
};

Cell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func,
};

Cell.defaultProps = {
  onSelect: () => {},
};

export default withContext(Cell);
