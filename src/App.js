import React, { useState } from "react";
import TableWrapperMenu from "./components/table-wrapper-menu/table-wrapper-menu";
import Table from "./components/table/table";
import tableColumns from "./constants/table-columns";
import data from "./mock-data";
import hasScheduledItems from "./utils/has-scheduled-items";
import { toggleSelect } from "./utils/table-utils";
import "./App.scss";
import Modal from "./components/modal/modal";

const selectableObjKey = "name";

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [allItemsSelected, setAllItemsSelected] = useState(false);
  const [activeModal, setActiveModal] = useState(false);

  const handleOnSelect = (event, item) => {
    setSelectedItems(toggleSelect(item, selectableObjKey));

    event.stopPropagation();
  };

  const handleSelectAll = () => {
    setSelectedItems((prevState) => {
      if (prevState.length === data.length) {
        setAllItemsSelected(false);

        return [];
      }

      setAllItemsSelected(true);

      return [...data];
    });
  };

  const handleOpenModal = () => setActiveModal(true);
  const handleCloseModal = () => setActiveModal(false);

  return (
    <div className="page-container">
      <TableWrapperMenu
        selectedItemsCounter={selectedItems.length}
        isAllSelected={allItemsSelected}
        onSelectAll={handleSelectAll}
        onDownload={handleOpenModal}
        canDownload={!hasScheduledItems(selectedItems)}
      />

      <Table
        data={data}
        columns={tableColumns}
        isSelectable={true}
        onSelect={handleOnSelect}
        selectedItems={selectedItems}
        selectableObjKey={selectableObjKey}
      />

      {/* TODO: Refactor to own list components */}
      <Modal
        title="Preparing the download of the following files:"
        active={activeModal}
        handleClose={handleCloseModal}
      >
        <ul>
          {selectedItems &&
            selectedItems.map((row) => (
              <li key={`${row.device}-${row.path}`}>
                {row.device}: {row.path}
              </li>
            ))}
        </ul>
      </Modal>
    </div>
  );
};

export default App;
