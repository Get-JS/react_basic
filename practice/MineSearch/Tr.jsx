import React, { useContext, memo } from "react";
import Td from "./Td";
import { TableContext } from "./useTableContext";

const Tr = memo(({ rowIndex }) => {
  const {
    state: { tableData },
  } = useContext(TableContext);

  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((_, i) => (
            <Td key={rowIndex + i} rowIndex={rowIndex} cellIndex={i} />
          ))}
    </tr>
  );
});

export default Tr;
