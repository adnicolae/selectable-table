import React from "react";
import { useContext } from "react";
import SelectableContext from "../../context/selectable-context";

const withContext = (Row) => {
  const WithContextRow = (props) => {
    const { onSelect } = useContext(SelectableContext);

    return <Row {...props} onSelect={onSelect} />;
  };

  return WithContextRow;
};

export default withContext;
