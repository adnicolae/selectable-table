import React from "react";
import SelectableContext from "../../context/selectable-context";

const SelectableTable = ({
  table: Table,
  selectedItems,
  onSelect,
  selectableObjKey,
  ...rest
}) => {
  const context = {
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
