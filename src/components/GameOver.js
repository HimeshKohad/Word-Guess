import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3
        style={{
          color: gameOver.guessedWord ? "green" : "red",
          fontFamily: "Poppins",
        }}
      >
        {gameOver.guessedWord
          ? "You Correctly Guessed the Word"
          : "You Failed to Guess the Word"}
      </h3>
      <h1 style={{ fontFamily: "Poppins" }}>
        Correct Word: {correctWord.toUpperCase()}
      </h1>
      {gameOver.guessedWord && (
        <h3
          style={{ fontFamily: "Poppins" }}
        >
          You guessed in {currAttempt.attempt} attempts
        </h3>
      )}
    </div>
  );
}

export default GameOver;
