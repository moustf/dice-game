import React from "react";
import Header from "./Game/Header/Header";
import Game from "./Game/Tens/Game";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Game />
      </div>
    </div>
  );
}
