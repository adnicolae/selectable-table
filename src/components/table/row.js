import React from "react";
import withContext from "./with-context-row";

const Row = ({ children, item, onSelect, ...rest }) => {
  return (
    <tr onClick={(e) => onSelect(e, item)} {...rest}>
      {children}
    </tr>
  );
};

export default withContext(Row);
