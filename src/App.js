import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is open-sourced on{" "}
          <a
            href="https://github.com/Popsi21/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
