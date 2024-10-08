import { YouTubeEmbed } from "react-social-media-embed"
import "./App.css"
import logo from "./assets/dally-salme.png"
import useWindowDimensions from "./useWindowDimensions"

const App = () => {
  const { width: windowWidth, height } = useWindowDimensions()
  const width = Math.min(windowWidth, 720)

  return (
    <>
      {height > 800 && <img src={logo} className="logo" alt="logo" />}
      <h1>Karismasalme</h1>
      <div className="content">
        <p>
          Vi ønsker å ta med salmeboka på turné! Drømmen er å arrangere
          konserter i kirkebygg rundt om i landet hvor vi lar Den Hellige Ånd få
          puste liv i vår rike salmearv, og hvor folk får anledning til å møte
          Jesus personlig.
        </p>
        <p>
          <b>Neste konsert:</b>
          <br />
          <a href="https://www.facebook.com/events/1040390277810784">
            Søndag 13. oktober kl 14, Norderhov Kirke (Ringeriksdomen) — gratis
            inngang
          </a>
        </p>
        <p>
          <b>Håper vi sees!</b>
        </p>
      </div>

      <hr />

      <a href="https://qr.vipps.no/box/f6c33f59-ae8c-4f3d-90d5-e8b16e1ced75/pay-in">
        <button>Gi en gave (Vipps)</button>
      </a>
      <a href="https://www.youtube.com/@Karismasalme?sub_confirmation=1">
        <button>YouTube</button>
      </a>

      <YouTubeEmbed
        url="https://www.youtube.com/watch?v=5aFG9wjJ8f0&t=2s"
        width={width}
        height={width / 1.78}
      />

      <p>
        Booking/kontakt:{" "}
        <a href="mailto:karismasalme@gmail.com">karismasalme@gmail.com</a>
      </p>
    </>
  )
}

export default App
