import React, { useState } from "react";
import "./App.scss";

import "./ChristmasTree.scss";

function App() {
  const [giftOpen, setGiftOpen] = useState<boolean>(false);
  const today = new Date(Date.now());
  const christmas = new Date("2020-12-24");
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(
    Math.abs((today.getTime() - christmas.getTime()) / oneDay)
  );
  if (diffDays > 0) {
    return (
      <div className="App">
        <h1 style={{ marginTop: "5rem" }}>{diffDays} dager igjen til jul</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="christmas"></div>
      <h1>Kjære Tine!</h1>
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
        Pakk opp
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
          I år får du av oss et gavekort på{" "}
          <span style={{ whiteSpace: "nowrap" }}>1 000,-</span> kroner til å
          bruke på TV møbel, stuebord, vinkurs, spatur, eller en hvilken som
          helst opplevelse.
          <br />
          <br />
          Vi er kjempeglad i deg!
        </p>
        <p style={{ marginBottom: "3rem" }}>
          Kjærlig hilsen Erik, Jørgen, Maja, Terje og Vincent &#x1f43e;
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
