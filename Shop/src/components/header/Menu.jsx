import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
function Menu() {
  return (
    <nav className={styles.primaryNavigation}>
      <ui className={styles.nav} onClick={(e) => handle(e)}>
        <li className={styles.navitem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            to="/catagories"
          >
            Catagories
          </NavLink>
          {/* <span>⋁</span> */}
        </li>
        <li className={styles.navitem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className={styles.navitem}>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className={styles.navitem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <span className={styles.navindicator}></span>
      </ui>
    </nav>
  );
}

export default Menu;
