import React from "react";
import withContext from "./with-context-row";
import "./row.scss";

const Row = ({ children, item, onSelect, ...rest }) => {
  return (
    <tr
      className="row"
      onClick={(e) => onSelect(e, item)}
      {...rest}
      aria-label="Select Item"
    >
      {children}
    </tr>
  );
};

export default withContext(Row);
