import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <span>ODS 3</span>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/ods">ODS</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
