import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";
function Logo() {
  return (
    <NavLink to="/" className={styles.logoText}>
      <div className={styles.logo}>KMB online shop</div>
    </NavLink>
  );
}

export default Logo;
