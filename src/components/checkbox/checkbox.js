import React from "react";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CHECKBOX_STATES from "../../constants/checkbox-states";

const isChecked = (value) => value === CHECKBOX_STATES.Checked;
const isIndeterminate = (value) => value === CHECKBOX_STATES.Indeterminate;

const Checkbox = ({ value, ...rest }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.checked = isChecked(value);
    ref.current.indeterminate = isIndeterminate(value);
  }, [value]);

  return <input ref={ref} type="checkbox" {...rest} />;
};

Checkbox.propTypes = {
  value: PropTypes.string,
};

export default Checkbox;
