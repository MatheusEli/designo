import { NavLink } from "react-router-dom";
import DesignoLogo from "../../assets/designo-logo.jpg";

export default function Header() {
  return (
    <header className="header">
        <img src={DesignoLogo} alt="Designo Logo" />

        <nav className="navigation">
          <ul>
            <NavLink to="/about">
              <li>Our Company</li>
            </NavLink>
            <NavLink to="/locations">
              <li>Locations</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
      </header>
  )
}
