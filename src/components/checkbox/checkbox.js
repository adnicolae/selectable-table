import React from "react";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CHECKBOX_STATES from "../../constants/checkbox-states";

const isIndeterminate = (value) => value === CHECKBOX_STATES.Indeterminate;

const Checkbox = ({ value, ...rest }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.indeterminate = isIndeterminate(value);
  }, [value]);

  return (
    <input data-testid="custom-checkbox" ref={ref} type="checkbox" {...rest} />
  );
};

Checkbox.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Checkbox;
