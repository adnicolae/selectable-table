import React, { useState } from "react";
import Table from "./components/table/table";
import tableColumns from "./constants/table-columns";
import data from "./mock-data";
import { toggleSelect } from "./utils/table-utils";

const selectableObjKey = "name";

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleOnSelect = (event, item) => {
    setSelectedItems(toggleSelect(item, selectableObjKey));

    event.stopPropagation();
  };

  return (
    <Table
      data={data}
      columns={tableColumns}
      onSelect={handleOnSelect}
      selectedItems={selectedItems}
      selectableObjKey={selectableObjKey}
    />
  );
};

export default App;
