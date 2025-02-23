import React from "react";

const BingoTable = ({ struckCells }) => {
  const arr = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className="container">
      <table id="tblBingo">
        <tbody>
          {[...Array(5)].map((_, i) => (
            <tr key={i}>
              {[...Array(5)].map((_, j) => {
                const cellNumber = arr[i * 5 + j];
                const isStruck = struckCells.includes(cellNumber - 1);
                return (
                  <td
                    key={j}
                    id={cellNumber}
                    className={`main-table-cell ${isStruck ? "strickout" : ""}`}
                  >
                    <div className="cell-format">{cellNumber}</div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoTable;