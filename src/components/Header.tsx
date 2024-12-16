import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <div className={styles.headerTitle}>
        <h1>
          <Link to="/">Rick and Morty</Link>
        </h1>
      </div>
      <div className={styles.headerFavorites}>
        <Link to="/favorites">Favoritos</Link>
      </div>
    </header>
  );
}

export default Header;