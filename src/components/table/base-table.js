import React from "react";
import PropTypes from "prop-types";
import Cell from "./cell";
import Row from "./row";

const BaseTable = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns &&
            columns.map((column) => (
              <th scope="col" key={column.name}>
                {column.title}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <Row key={`${item.name}-${item.device}__row`} item={item}>
              {columns &&
                columns.map((column) => {
                  return (
                    <Cell
                      key={`${item.name}-${column.name}__cell`}
                      item={item}
                      column={column}
                    />
                  );
                })}
            </Row>
          ))}
      </tbody>
    </table>
  );
};

BaseTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BaseTable;
