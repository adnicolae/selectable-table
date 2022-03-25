import React from "react";
import PropTypes from "prop-types";
import SelectableTable from "../components/table/selectable-table";

const withSelectable = (Table) => {
  const TableWrapper = ({ isSelectable, ...rest }) => {
    if (isSelectable) {
      return <SelectableTable {...rest} table={Table} />;
    }

    return <Table {...rest} />;
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
