import React from "react";
import Tr from "./Tr";

const Table = ({ tableData, dispatch }) => {
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((_tr, idx) => (
            <Tr
              key={idx}
              dispatch={dispatch}
              rowIndex={idx}
              rowData={tableData[idx]}
            />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
