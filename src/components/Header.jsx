import "./Header.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Theme from "./Theme";

function Header() {
  return (
    <header>
      <div className="section-container">
        <Logo />
        <Navigation />
        <Theme />
      </div>
    </header>
  );
}

export default Header;
