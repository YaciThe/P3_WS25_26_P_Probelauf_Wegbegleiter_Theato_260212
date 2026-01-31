import MapPicture from '../assets/MapPicture.png';
import './Anfrage.css';
import './NeueAnfrage.css';
import Header from '../components/Header';
import SendIcon from '../assets/SendIcon.png';

import { useState } from 'react';


export function NeueAnfrage() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [waiting, setWaiting] = useState(false);

  function handleSend(e) {
    e.preventDefault();
    if (!text.trim() || waiting) return;
    setMessages(msgs => [...msgs, { from: "user", text }]);
    setText("");
    setWaiting(true);
    setTimeout(() => {
        setMessages(msgs => [
          ...msgs,
          {
            from: "bot",
            text: `Wir haben ein Treffen für dich vereinbart, hier sind die Details:

                    Name: Gerd Geselle
                    Ort: Gaststätte xy
                    Zeit: 12:00 Uhr
                    Koordinaten: 123456`
          }
        ]);
      setWaiting(false);
    }, 1200);
  }

  // Datum im deutschen Format
  const today = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <div className="neueanfrage-wrapper">
      <Header title="Neue Anfrage" backTo="/anfrage" />
      <div className="online-hint">
        {messages.length === 0
          ? 'du bist jetzt online'
          : today}
      </div>
      <div className="neueanfragecontent" style={{minHeight:0}}>
        {messages.map((msg, i) => (
          <div key={i} style={{display: 'flex', flexDirection: 'column', alignItems: msg.from === 'user' ? 'flex-end' : 'flex-start'}}>
            <div className={`chatmsg chatmsg-${msg.from}`}
            >
              <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
              {msg.from === 'bot' && (
                <div className="map-preview-box">
                  <img src={MapPicture} alt="Karten-Vorschau" className="map-preview-img" />
                  <a href="/karte" className="map-preview-btn">Wegpunkt anzeigen</a>
                </div>
              )}
            </div>
            <div
              className="online-hint chatmsg-time"
              style={{
                margin: '2px 0 10px 0',
                textAlign: msg.from === 'user' ? 'right' : 'left',
                alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                minWidth: 60
              }}
            >
              {new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
      </div>
      <form className="neueanfrage-inputbar" onSubmit={handleSend}>
        <input
          type="text"
          className="neueanfrage-inputfield"
          placeholder="schreiben..."
          value={text}
          onChange={e => setText(e.target.value)}
          disabled={waiting}
        />
        <button type="submit" className="neueanfrage-sendbutton" disabled={waiting}>
          <img src={SendIcon} alt="Senden" className="neueanfrage-sendicon" />
        </button>
      </form>
    </div>
  );
}
