import styles from "./LogSign.module.css";
import { NavLink } from "react-router-dom";
function LogSign() {
  return (
    <>
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
    </>
  );
}

export default LogSign;
