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
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GameResults guesses={guesses} answer={answer} />
      <GameForm handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
