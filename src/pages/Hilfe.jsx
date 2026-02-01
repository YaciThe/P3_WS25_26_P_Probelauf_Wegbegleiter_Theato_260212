import './Hilfe.css';
import { useState } from 'react';

import Header from '../components/Header';
import PersonThinkingImg from '../assets/personthinkingfinal.png';
import Sprechblase from '../components/Sprechblase';
import HilfeMapvorschau from '../components/HilfeMapvorschau';

const DATA = {
  orte: [
    'Kirche xy',
    'freiwillige Feuerwehr xy',
    'Gesellenunterkunft xy',
    'Kolpinghaus xy',
  ],
  jobs: [
    'Arbeitgeber 1',
    'Arbeitgeber 2',
    'Arbeitgeber 3',
  ],
  allgemein: [
    'Charly knoten',
    'Schlafplatz richten',
    'Trampen',
  ],
};

/* 👉 Text für die Mapvorschau pro Eintrag */
const MAP_TEXT = {
  'Kirche xy': 'Hier kannst du nach Nahrung oder einem Schlafplatz fragen:',
  'freiwillige Feuerwehr xy': 'Hier kannst du nach Nahrung oder einem Schlafplatz fragen:',
  'Gesellenunterkunft xy': 'Hier kannst du nach Nahrung oder einem Schlafplatz fragen:',
  'Kolpinghaus xy': 'Hier kannst du nach Nahrung oder einem Schlafplatz fragen.',
  'Arbeitgeber 1': 'Hier kannst du nach Arbeit fragen:',
  'Arbeitgeber 2': 'Hier kannst du nach Arbeit fragen:',
  'Arbeitgeber 3': 'Hier kannst du nach Arbeit fragen:',
  'Charly knoten': 'Hier eine Anleitung, wie man den Charlottenburger knotet:',
  'Schlafplatz richten': 'Tipps zum sicheren und ruhigen Schlafen:',
  'Trampen': 'Hinweise zum sicheren Trampen:',
};

export function Hilfe() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const toggleSection = (section) => {
    setActiveItem(null);
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const handleRightItemClick = (label) => {
    setActiveItem(label);
  };

  const rightItems = activeSection ? DATA[activeSection] : [];

  return (
    <div className="hilfe-wrapper">
      <Header title="Hilfe" />

      <div className="hilfe-content">
        <div className="hilfe-row">
          {/* LINKE BOX */}
          <div className="hilfe-linkbox">
            <div
              className={`hilfe-link hilfe-link--top ${
                activeSection === 'orte' ? 'is-active' : ''
              }`}
              onClick={() => toggleSection('orte')}
            >
              Orte
            </div>

            <hr className={`hilfe-divider ${activeSection === 'jobs' ? 'is-hidden' : ''}`} />

            <div
              className={`hilfe-link ${
                activeSection === 'jobs' ? 'is-active' : ''
              }`}
              onClick={() => toggleSection('jobs')}
            >
              Jobs
            </div>

            <hr
              className={`hilfe-divider ${
                activeSection === 'allgemein' ? 'is-hidden' : ''
              }`}
            />

            <div
              className={`hilfe-link hilfe-link--bottom ${
                activeSection === 'allgemein' ? 'is-active' : ''
              }`}
              onClick={() => toggleSection('allgemein')}
            >
              Allgemein
            </div>
          </div>

          {/* RECHTE SPALTE */}
          {activeSection && (
            <div className="hilfe-rightcol">
              {/* RECHTE AUSWAHLBOX */}
              <div className="hilfe-detailbox">
                {rightItems.map((label, idx) => {
                  const isTop = idx === 0;
                  const isBottom = idx === rightItems.length - 1;
                  const nextLabel = rightItems[idx + 1];

                  const hideDivider =
                    activeItem === label || (nextLabel && activeItem === nextLabel);

                  return (
                    <div key={label}>
                      <button
                        type="button"
                        className={[
                          'hilfe-detail',
                          activeItem === label ? 'is-active' : '',
                          isTop ? 'hilfe-detail--top' : '',
                          isBottom ? 'hilfe-detail--bottom' : '',
                        ].join(' ')}
                        onClick={() => handleRightItemClick(label)}
                      >
                        {label}
                      </button>

                      {idx < rightItems.length - 1 && (
                        <hr
                          className={`hilfe-detail-divider ${
                            hideDivider ? 'is-hidden' : ''
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* 👉 MAPVORSCHAU oder Schritte */}
              {['Charly knoten', 'Schlafplatz richten', 'Trampen'].includes(activeItem) && MAP_TEXT[activeItem] ? (
                <div className="hilfe-mapvorschau-box">
                  <p className="hilfe-maptext">{MAP_TEXT[activeItem]}</p>
                  <ul className="hilfe-mapsteps">
                    <li>Schritt 1</li>
                    <li>Schritt 2</li>
                    <li>Schritt 3</li>
                  </ul>
                </div>
              ) : (
                activeItem && MAP_TEXT[activeItem] && (
                  <HilfeMapvorschau
                    text={MAP_TEXT[activeItem]}
                  />
                )
              )}
            </div>
          )}
        </div>

        {/* STARTZUSTAND */}
        {!activeSection && (
          <>
            <Sprechblase text="Hier findest du einige nützliche Informationen über verschiedene Orte, mögliche Arbeitgeber oder allgemeine Tipps" />

            <div className="impressum">
              <h1>Impressum</h1>
              <p>
                Vorname Nachname<br />
                Musterstraße xy<br />
                12345 Musterstadt
              </p>
            </div>
          </>
        )}

        <img
          src={PersonThinkingImg}
          alt="Person thinking"
          className="personthinking-hilfe"
        />
      </div>
    </div>
  );
}
