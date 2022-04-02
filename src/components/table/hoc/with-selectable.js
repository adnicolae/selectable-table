import React from "react";
import PropTypes from "prop-types";
import SelectableTable from "../selectable-table";

const withSelectable = (Table) => {
  const TableWrapper = (props) => {
    const { isSelectable } = props;

    if (isSelectable) {
      return <SelectableTable {...props} table={Table} />;
    }

    return <Table {...props} />;
  };

  TableWrapper.propTypes = {
    isSelectable: PropTypes.bool,
  };

  TableWrapper.defaultProps = {
    isSelectable: false,
  };

  return TableWrapper;
};

export default withSelectable;
