
import './Anfrage.css';
import Header from '../components/Header';

export function Anfrage() {
  return (
    <div className="anfrage-wrapper">
      <Header title="Anfrage" />
      <div className="anfrage-content">
        <h2>Anfrage</h2>
        <p>Hier können Nutzer eine Anfrage stellen.</p>
      </div>
    </div>
  );
}
