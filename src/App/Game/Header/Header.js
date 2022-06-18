import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Tenzies</h1>
      <p className="header__para">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </header>
  );
}
