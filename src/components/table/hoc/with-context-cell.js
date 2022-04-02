import React, { useContext } from "react";
import PropTypes from "prop-types";
import SelectableContext from "../selectable-context";
import { isSelected } from "../../../utils/table-utils";

const withContext = (Cell) => {
  const WithContextCell = (props) => {
    const { selectedItems, onSelect, selectableObjKey, isSelectable } =
      useContext(SelectableContext);
    const { item } = props;

    const selected = isSelected({ item, selectedItems, key: selectableObjKey });

    return (
      <Cell
        {...props}
        isSelectableTable={isSelectable}
        selected={selected}
        onSelect={onSelect}
      />
    );
  };

  WithContextCell.propTypes = {
    item: PropTypes.object,
  };

  WithContextCell.defaultProps = {
    item: {},
  };

  return WithContextCell;
};

export default withContext;
