import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { logger, Counter } from "lib";
import { Game } from "lib/components/game";

function App() {
  return (
    <div className="App">
      <h1>Playground</h1>
      <div className="card">
        <Game />
      </div>
      <p className="read-the-docs">
        Tic Tac Toe made with React
      </p>
    </div>
  );
}

export default App;
