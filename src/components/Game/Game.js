import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameForm from "../GameForm/GameForm";
import GameResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleSubmitGuess(guess) {
    const nextGuess = {
      value: guess,
      id: `${guess}-${Math.random()}`,
    };
    setGuesses([...guesses, nextGuess]);
  }

  return (
    <>
      <GameResults guesses={guesses} />
      <GameForm handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
