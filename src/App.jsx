import { useState } from "react";
import logo from "./assets/dally-salme.png";
import "./App.css";

const App = () => (
  <>
    <img src={logo} className="logo" alt="logo" />
    <h1>Karismasalme</h1>
    <div className="content">
      <p>
        Vi ønsker å ta med salmeboka på turné! Drømmen er å arrangere konserter
        i kirkebygg rundt om i landet hvor vi lar Den Hellige Ånd få puste liv i
        vår rike salmearv, og hvor folk får anledning til å møte Jesus
        personlig.
      </p>
      <p>
        <b>Håper vi sees!</b>
      </p>
    </div>

    <hr />

    <a href="https://qr.vipps.no/box/f6c33f59-ae8c-4f3d-90d5-e8b16e1ced75/pay-in">
      <button>Gi en gave (Vipps)</button>
    </a>
    <a href="https://www.youtube.com/channel/UCaSB7-rogKiJp3-sDocBe0w">
      <button>YouTube</button>
    </a>

    <p>
      Booking/kontakt:{" "}
      <a href="mailto:karismasalme@gmail.com">karismasalme@gmail.com</a>
    </p>
  </>
);

export default App;
