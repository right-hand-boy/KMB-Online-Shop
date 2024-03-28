import { NavLink } from "react-router-dom";
import styles from "./PrimaryNavigation.module.css";
function PrimaryNavigation() {
  return (
    <nav className={styles.nav}>
      <li className={styles.navitem}>ETH</li>
      <li className={styles.navitem}>
        <NavLink to="/help">help</NavLink>
      </li>
      <li className={styles.navitem}>
        <NavLink to="/cart">
          <svg
            width="2rem"
            height="1.6rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          cart
        </NavLink>
      </li>
      <li className={styles.navitem}>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className={styles.navitem}>
        <NavLink to="/sign" className={styles.signUp}>
          <svg
            width="2rem"
            height="1.6rem"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>i</title>
            <g id="Complete">
              <g id="user-add">
                <g>
                  <path
                    d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    x1="17"
                    y1="11"
                    x2="23"
                    y2="11"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    x1="20"
                    y1="8"
                    x2="20"
                    y2="14"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </g>
          </svg>
          sign up
        </NavLink>
      </li>
    </nav>
  );
}

export default PrimaryNavigation;
