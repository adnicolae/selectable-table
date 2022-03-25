import React from "react";
import Checkbox from "../checkbox/checkbox";
import PropTypes from "prop-types";
import { isSelected } from "../../utils/table-utils";

const Table = ({
  data,
  columns,
  onSelect,
  selectedItems,
  selectableObjKey,
}) => {
  return (
    <table>
      <thead>
        <tr>
          {columns &&
            columns.map((column) => <th key={column.name}>{column.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <tr
              key={`${item.name}-${item.device}__row`}
              onClick={(e) => onSelect(e, item)}
            >
              {columns &&
                columns.map((column) => {
                  if (column.name === "selectable") {
                    return (
                      <th
                        scope="row"
                        key={`${item.name}-${column.name}__checkbox`}
                      >
                        <Checkbox
                          onClick={(e) => onSelect(e, item)}
                          checked={isSelected({
                            item,
                            selectedItems,
                            key: selectableObjKey,
                          })}
                        />
                      </th>
                    );
                  }

                  return (
                    <td key={`${item.name}-${column.name}__cell`}>
                      {item[column.name]}
                    </td>
                  );
                })}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Table;
