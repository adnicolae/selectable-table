import React from "react";
import SelectableContext from "./selectable-context";

const SelectableTable = ({
  table: Table,
  isSelectable,
  selectedItems,
  onSelect,
  selectableObjKey,
  ...rest
}) => {
  const context = {
    isSelectable,
    selectedItems,
    onSelect,
    selectableObjKey,
  };

  return (
    <SelectableContext.Provider value={context}>
      <Table {...rest} />
    </SelectableContext.Provider>
  );
};

export default SelectableTable;
