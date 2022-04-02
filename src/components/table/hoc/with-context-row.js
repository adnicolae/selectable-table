import React from "react";
import { useContext } from "react";
import { isSelected } from "../../../utils/table-utils";
import SelectableContext from "../selectable-context";

const withContext = (Row) => {
  const WithContextRow = (props) => {
    const { selectedItems, onSelect, selectableObjKey } =
      useContext(SelectableContext);
    const { item } = props;

    const selected = isSelected({ item, selectedItems, key: selectableObjKey });

    return <Row {...props} selected={selected} onSelect={onSelect} />;
  };

  return WithContextRow;
};

export default withContext;
