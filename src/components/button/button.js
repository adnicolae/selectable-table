import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ children, variant, icon: Icon, ...rest }) => {
  const btnClassNames = classNames(
    { btn: variant === "button" },
    { "menu-item": variant === "menu-item" }
  );

  return (
    <button className={btnClassNames} type="button" {...rest}>
      <span className={classNames({ "menu-item__icon": Icon })}>{Icon}</span>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node,
};

Button.defaultProps = {
  variant: "button",
};

export default Button;
