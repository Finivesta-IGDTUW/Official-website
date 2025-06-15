import React from "react";

const BingoLetters = ({ winningIterator }) => {
  const letters = ["B", "I", "N", "G", "O"];

  return (
    <div className="letter-div">
      <table id="tblLetter">
        <tbody>
          <tr>
            {letters.map((letter, index) => (
              <td
                key={index}
                className={`letters-bingo ${index < winningIterator ? "show-bingo" : ""}`}
              >
                {letter}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BingoLetters;