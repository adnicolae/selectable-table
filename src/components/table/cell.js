import React from "react";
import Checkbox from "../checkbox/checkbox";
import PropTypes from "prop-types";
import withContext from "./hoc/with-context-cell";

const Cell = ({ item, column, selected, onSelect, isSelectableTable }) => {
  const formatter = column.formatter;
  const isSelectableCell = column.name === "selectable";
  const isFormattedCell = typeof formatter === "function";

  if (isSelectableTable && isSelectableCell) {
    return (
      <td>
        <Checkbox
          onChange={(e) => onSelect(e, item)}
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
