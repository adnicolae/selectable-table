import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ children, variant, icon: Icon, ...rest }) => {
  const btnClassNames = classNames({ "menu-item": variant === "menu-item" });

  return (
    <button className={btnClassNames} type="button" {...rest}>
      {Icon}
      <span className={classNames(btnClassNames, "menu-item__label")}>
        {children}
      </span>
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
