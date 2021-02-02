import React, { useReducer, createContext, useMemo } from "react";

export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";
export const NORMALIZE_CELL = "NORMALIZE_CELL";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0, // 0 이상이면 다 opened
};

const initialState = {
  tableData: [],
  data: {
    row: 0,
    cell: 0,
    mine: 0,
  },
  result: "",
  halted: true,
  openedCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        data: {
          row: action.row,
          cell: action.cell,
          mine: action.mine,
        },
        openedCount: 0,
        tableData: plantMine(action.row, action.cell, action.mine),
        halted: false,
        timer: 0,
      };
    case OPEN_CELL: {
      const tableData = [...state.tableData];
      tableData.forEach((row, i) => {
        tableData[i] = [...row];
      });
      const checked = [];
      let openedCount = 0;

      function checkAround(row, cell) {
        const MAX_ROW = tableData.length;
        const NAX_CELL = tableData[0].length;
        const OPEN_CONDITION = [
          CODE.OPENED,
          CODE.FLAG,
          CODE.FLAG_MINE,
          CODE.QUESTION_MINE,
          CODE.QUESTION,
        ];
        const MINE_CONTION = [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE];

        // 상하좌우 없는칸은 패스
        if (row < 0 || row >= MAX_ROW || cell < 0 || cell >= NAX_CELL) return;

        // 열린칸이면 패스
        if (OPEN_CONDITION.includes(tableData[row][cell])) return;

        // 한 번 연칸은 패스
        if (checked.includes(row + "/" + cell)) return;
        else checked.push(row + "/" + cell);

        // 주변 최대 9칸 정보 저장
        let around = [tableData[row][cell - 1], tableData[row][cell + 1]];
        if (tableData[row - 1]) {
          around = around.concat([
            tableData[row - 1][cell - 1],
            tableData[row - 1][cell],
            tableData[row - 1][cell + 1],
          ]);
        }
        if (tableData[row + 1]) {
          around = around.concat([
            tableData[row + 1][cell - 1],
            tableData[row + 1][cell],
            tableData[row + 1][cell + 1],
          ]);
        }

        // 주변 지뢰가 있는 칸수 카운팅
        const count = around.filter((v) => MINE_CONTION.includes(v)).length;

        // 주변 지뢰가 모두 없을 때 주변 칸 중점으로 열 수 있는 칸 찾기
        if (count === 0) {
          if (row > -1) {
            const near = [];
            if (row - 1 > -1) {
              near.push([row - 1, cell - 1]);
              near.push([row - 1, cell]);
              near.push([row - 1, cell + 1]);
            }
            near.push([row, cell - 1]);
            near.push([row, cell + 1]);
            if (row + 1 < tableData.length) {
              near.push([row + 1, cell - 1]);
              near.push([row + 1, cell]);
              near.push([row + 1, cell + 1]);
            }
            // DFS
            near.forEach((nearInfo) => {
              if (tableData[nearInfo[0]][nearInfo[1]] !== CODE.OPENED) {
                checkAround(nearInfo[0], nearInfo[1]);
              }
            });
          }
        }

        // 내 칸이 닫힌 칸이면 카운트 증가
        if (tableData[row][cell] === CODE.NORMAL) openedCount += 1;
        tableData[row][cell] = count;
      }

      // 주변칸 열 수 있는지 체크
      checkAround(action.row, action.cell);

      let halted = false;
      let result = "";

      // 승리 조건 검사
      if (
        state.data.row * state.data.cell - state.data.mine ===
        state.openedCount + openedCount
      ) {
        halted = true;
        result = `${state.timer}초만에 승리하셨습니다`;
      }
      return {
        ...state,
        tableData,
        openedCount: state.openedCount + openedCount,
        halted,
        result,
      };
    }
    case CLICK_MINE: {
      const tableData = [...state.tableData];
      tableData[action.row][action.cell] = CODE.CLICKED_MINE;
      return {
        ...state,
        tableData,
        halted: true,
      };
    }
    case FLAG_CELL: {
      const tableData = [...state.tableData];
      if (tableData[action.row][action.cell] === CODE.MINE) {
        tableData[action.row][action.cell] = CODE.FLAG_MINE;
      } else {
        tableData[action.row][action.cell] = CODE.FLAG;
      }
      return {
        ...state,
        tableData,
      };
    }
    case QUESTION_CELL: {
      const tableData = [...state.tableData];
      if (tableData[action.row][action.cell] === CODE.FLAG_MINE) {
        tableData[action.row][action.cell] = CODE.QUESTION_MINE;
      } else {
        tableData[action.row][action.cell] = CODE.QUESTION;
      }
      return {
        ...state,
        tableData,
      };
    }
    case NORMALIZE_CELL: {
      const tableData = [...state.tableData];
      if (tableData[action.row][action.cell] === CODE.QUESTION_MINE) {
        tableData[action.row][action.cell] = CODE.MINE;
      } else {
        tableData[action.row][action.cell] = CODE.NORMAL;
      }
      return {
        ...state,
        tableData,
      };
    }
    default:
      return state;
  }
};

function plantMine(row, cell, mine) {
  const candidate = Array(row * cell)
    .fill()
    .map((_, i) => i);
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }

  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }

  return data;
}

const TableContext = createContext({
  initialState,
  dispatch: () => {},
});

const TableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export { TableProvider, TableContext };
export default TableContext;
