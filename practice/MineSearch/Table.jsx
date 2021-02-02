import React, { useContext, memo } from "react";
import Tr from "./Tr";
import { TableContext } from "./useTableContext";

const Table = memo(() => {
  const {
    state: { tableData },
  } = useContext(TableContext);

  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((_, i) => (
            <Tr key={i} rowIndex={i} />
          ))}
      </tbody>
    </table>
  );
});

export default Table;
