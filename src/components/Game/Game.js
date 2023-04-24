import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameForm from "../GameForm/GameForm";
import GameResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running, won, lost
  const [gameStatus, setGameStatus] = React.useState("running");

  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuess = [...guesses, guess];
    setGuesses(nextGuess);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    }

    if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GameResults guesses={guesses} answer={answer} />
      <GameForm handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
