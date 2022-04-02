import classNames from "classnames";
import React from "react";
import withContext from "./hoc/with-context-row";
import PropTypes from "prop-types";
import "./row.scss";

const Row = ({ children, item, selected, onSelect, ...rest }) => {
  const rowClassNames = classNames("row", { selected: selected });

  return (
    <tr
      className={rowClassNames}
      onClick={(e) => onSelect(e, item)}
      {...rest}
      aria-label="Select Item"
    >
      {children}
    </tr>
  );
};

Row.propTypes = {
  item: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func,
};

Row.defaultProps = {
  onSelect: () => {},
};

export default withContext(Row);
