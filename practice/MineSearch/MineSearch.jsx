import React, { useEffect, useContext, useState } from "react";
import Table from "./Table";
import MineCreateForm from "./MineCreateForm";
import { TableProvider, TableContext } from "./useTableContext";

const MineSearch = () => {
  return (
    <TableProvider>
      <Main />
    </TableProvider>
  );
};

const Main = () => {
  const [timer, setTimer] = useState(0);
  const {
    state: { halted, result },
    dispatch,
  } = useContext(TableContext);

  useEffect(() => {
    let timer;
    if (halted === false) {
      timer = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [halted]);

  return (
    <>
      <MineCreateForm />
      <div>{timer}</div>
      <Table />
      <div>{result}</div>
    </>
  );
};
export default MineSearch;
