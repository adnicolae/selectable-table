import React from "react";
import Button from "../button/button";
import PropTypes from "prop-types";
import Checkbox from "../checkbox/checkbox";
import { FaDownload } from "react-icons/fa";
import "./table-wrapper-menu.scss";

const TableWrapperMenu = (props) => {
  const {
    selectedItemsCounter,
    isAllSelected,
    onSelectAll,
    onDownload,
    canDownload,
  } = props;

  const checkboxValue =
    selectedItemsCounter > 0 && !isAllSelected
      ? "indeterminate"
      : isAllSelected;
  const isBtnDisabled = selectedItemsCounter === 0 || !canDownload;

  return (
    <div className="table-wrapper-menu">
      <Checkbox
        checked={isAllSelected}
        onChange={onSelectAll}
        value={checkboxValue}
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex="1"
        aria-label="Select/Deselect All"
      />
      <p className="table-wrapper-menu__counter-text">
        {selectedItemsCounter > 0
          ? `Selected: ${selectedItemsCounter}`
          : `None Selected`}
      </p>
      <Button
        variant="menu-item"
        onClick={onDownload}
        disabled={isBtnDisabled}
        icon={<FaDownload />}
        aria-label="Download Selected"
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex="2"
      >
        Download Selected
      </Button>
    </div>
  );
};

TableWrapperMenu.propTypes = {
  selectedItemsCounter: PropTypes.number.isRequired,
  isAllSelected: PropTypes.bool.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
  canDownload: PropTypes.bool.isRequired,
};

export default TableWrapperMenu;
