import React from 'react';
import './CustomTable.css'; // Importing the CSS file

function CustomTable({ tableData }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            {tableData.header.map((heading, index) => (
              <th key={index} data-column={heading}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} data-column={tableData.header[cellIndex]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CustomTable;