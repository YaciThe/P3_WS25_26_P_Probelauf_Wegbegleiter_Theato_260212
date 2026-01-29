import "./Header.css";
import { Link } from "react-router-dom";
import BackArrow from "../assets/BackArrow.png";
import LogoSchacht from "../assets/LogoSchacht.png";
export default function Header(props) {
  const {
    toggle = false,
    setToggle = () => {},
    showArrow = true,
    showLogo = true,
    showToggle = true,
    title = ""
  } = props || {};
  const gridStyle = title
    ? { display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'space-between' }
    : { display: 'grid', gridTemplateColumns: '1fr auto 1fr', justifyContent: 'space-between' };
  return (
    <div className="header" style={gridStyle}>
      {/* Arrow links, immer sichtbar */}
      <div className="headerarrow">
        <Link to="/">
          <img src={BackArrow} alt="BackArrow" className="backarrow" />
        </Link>
      </div>
      {/* Mittig: Logo oder Title */}
      {!title && showLogo && (
        <div className="headerlogo">
          <Link to="/">
            <img src={LogoSchacht} alt="Schachtlogo" className="schachtlogo" />
          </Link>
        </div>
      )}
      {title && (
        <div className="headertitle" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', fontWeight: 500 }}>
          {title}
        </div>
      )}
      {/* Rechts: Toggle oder Logo */}
      {!title && showToggle && (
        <div className="toggle">
          <p style={{margin: 0}}>{toggle ? 'online' : 'offline'}</p>
          <div
            className="karte-toggle-switch"
            onClick={() => setToggle((t) => !t)}
            aria-pressed={toggle}
            tabIndex={0}
            role="button"
          >
            <div className={`toggle-track${toggle ? " toggle-on" : ""}`}>
              <div className="toggle-circle" />
            </div>
          </div>
        </div>
      )}
      {title && showLogo && (
        <div className="headerlogo" style={{ justifyContent: 'flex-end' }}>
          <Link to="/">
            <img src={LogoSchacht} alt="Schachtlogo" className="schachtlogo" />
          </Link>
        </div>
      )}
    </div>
  );
}
