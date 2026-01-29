import './Notfallkontakte.css';
import Header from '../components/Header';

export function Notfallkontakte() {
  return (
    <div className="notfall-wrapper">
      <Header title="Notfallkontakte" />
      <div className="notfall-content">
        <h2>Notfallkontakte</h2>
        <p>Wichtige Kontakte im Notfall.</p>
      </div>
    </div>
  );
}
