import "./Anfrage.css";

import Header from "../components/Header";
import personWalkingImg from "../assets/personwalkingnew.png";
import { Link } from "react-router-dom";

export function Anfrage() {
  return (
    <div className="anfrage-wrapper">
      <Header title="Anfrage" />

      <div className="anfrage-box">
        <div className="anfrage-content">
          <Link to="/neue-anfrage" className="anfrage-link">+ Neue Anfrage</Link>
          <hr className="anfrage-divider-orange" />
          <Link to="/alte-anfrage" className="anfrage-link">Anfrage 1</Link>
          <hr className="anfrage-divider" />
          <Link to="/alte-anfrage" className="anfrage-link">Anfrage 2</Link>
          <hr className="anfrage-divider" />
          <Link to="/alte-anfrage" className="anfrage-link">Anfrage 3</Link>
        </div>
      </div>
      
      <img
        src={personWalkingImg}
        alt="Person walking"
        className="personwalking"
      />
    </div>
  );
}
