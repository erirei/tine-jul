import React, { useState } from "react";
import "./App.scss";

import "./ChristmasTree.scss";

function App() {
  const [giftOpen, setGiftOpen] = useState<boolean>(false);
  return (
    <div className="App">
      <div className="christmas"></div>
      <h1>Gave til Tine!</h1>
      <button
        onClick={() => {
          setGiftOpen(true);
          setTimeout(() => {
            var elmnt = document.getElementById("firstImage");
            elmnt?.scrollIntoView({
              behavior: "smooth",
            });
          }, 100);
        }}
      >
        Åpne
      </button>

      <div className={`${giftOpen ? "show" : "no-show"}`}>
        <img
          width={"300px"}
          id={"firstImage"}
          style={{
            transform: "rotate(10deg)",
            marginTop: "5rem",
          }}
          src="./ossTre.jpg"
        />
        <img
          width={"300px"}
          style={{
            transform: "rotate(-10deg)",
            marginBottom: "2rem",
            marginLeft: "auto",
          }}
          src="./fyrverkeri.jpg"
        />
        <p>
          Av oss i år får du et gavekort på{" "}
          <span style={{ whiteSpace: "nowrap" }}>1 000,-</span> kroner til hva
          det enn måtte være
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Fra Erik, Jørgen, Maja, Terje og Vincent
        </p>
        <img
          width={"300px"}
          style={{
            transform: "rotate(-4deg)",
            margin: "auto",
            marginBottom: "5rem",
          }}
          src="./alleSammen.jpg"
        />
      </div>
    </div>
  );
}

export default App;
