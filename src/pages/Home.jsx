import { Link } from "react-router-dom";
import "./Home.css";
import HomePicture from "../assets/HomePicture.png";
import MapIcon from "../assets/MapIcon.png";
import MessageIcon from "../assets/MessageIcon.png";


export function Home() {
  return (
    <div className="home-content-padding">
      <h1>
        Hallo! Ich bin dein Wegbegleiter.
        <br />
        Wie kann ich helfen?
      </h1>

      <img
        src={HomePicture}
        alt="Wegbegleiter"
        className="wegbegleiter"
      />

      <div className="home-buttons">
        <div className="button-wrapper">
          <Link to="/karte" className="map-button">
            <img src={MapIcon} alt="Karte" />
          </Link>
        </div>
        <div className="button-wrapper">
          <Link to="/anfrage" className="message-button">
            <img src={MessageIcon} alt="Anfrage" />
          </Link>
        </div>
      </div>

      <div className="home-links">
        <Link to="/notfallkontakte">Notfallkontakte</Link>
        <Link to="/hilfe">Hilfe & Impressum</Link>
      </div>
    </div>
  );
}
