import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>
      <div className="container">
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">
        <small>Coded by Andile Mbatha</small>
      </footer>
    </div>
  );
}

export default App;
