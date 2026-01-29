import './Hilfe.css';
import Header from '../components/Header';

export function Hilfe() {
  return (
    <div className="hilfe-wrapper">
      <Header title="Hilfe" />
      <div className="hilfe-content">
        <h2>Hilfe</h2>
        <p>Hilfetexte und Erklärungen.</p>
      </div>
    </div>
  );
}
