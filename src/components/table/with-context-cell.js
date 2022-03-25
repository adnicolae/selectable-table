import React, { useContext } from "react";
import SelectableContext from "../../context/selectable-context";
import { isSelected } from "../../utils/table-utils";
import PropTypes from "prop-types";

const withContext = (Cell) => {
  const WithContextCell = (props) => {
    const { selectedItems, onSelect, selectableObjKey } =
      useContext(SelectableContext);
    const { item } = props;

    const selected = isSelected({ item, selectedItems, key: selectableObjKey });

    return <Cell {...props} selected={selected} onSelect={onSelect} />;
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
