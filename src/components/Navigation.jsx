import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-link">
          <a href="#skillset">skillset</a>
        </li>
        <li className="nav-link">
          <a href="#projects">projects</a>
        </li>
        <li className="nav-link">
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
