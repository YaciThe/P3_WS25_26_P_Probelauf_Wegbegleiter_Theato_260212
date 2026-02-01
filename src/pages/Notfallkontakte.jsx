import './Notfallkontakte.css';
import Header from '../components/Header';
import { useState } from 'react';

export function Notfallkontakte() {
  const [showBox, setShowBox] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleSendLocation = () => {
    setShowBox(true);
    setClicked(true);
    setTimeout(() => {
      setShowBox(false);
    }, 3000);
  };

  return (
    <div className="notfall-wrapper">
      <Header title="Notfallkontakte" />
      <div className="notfall-content">
            <div className="officialnumbers">
              <p>Bei akuten Notfällen unbedingt immer erst die offiziellen Stellen kontaktieren:</p>
              <h1>Rettungsdienst / Feuerwehr: < br/>
              112
              < br/>< br/>
              Polizei: < br/>
              110</h1>
            </div>

            <p>... bei nicht akuten, aber dringlichen Anliegen, sowie Abbruch der Reise, wende dich bitte an diese Stellen:</p>
            <h2>Ausbildungsbetrieb xy< br/>
            +49 12345678910</h2>

            <h2>24h Schachtvertretung< br/>
            +49 12345678910</h2>

            <div className="sendlocation-wrapper">
              <p
                className={`sendlocation${clicked ? ' sendlocation-clicked' : ''}`}
                onClick={handleSendLocation}
              >
                aktuellen Standort an Schacht übermitteln
              </p>
              {showBox && (
                <div className="sendlocation-box">
                  Standort übermittelt
                </div>
              )}
            </div>

            <p>Dieses Gerät besitzt keinen Mobilfunk, bitte nutze dein Handy oder andere Mobilgeräte.</p>
      
      </div>
    </div>
  );
}
