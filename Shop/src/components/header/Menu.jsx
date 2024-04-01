import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
function Menu() {
  const location = useLocation();

  // Split the current path into an array of segments
  const segments = location.pathname.split("/").filter(Boolean);
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
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {segments.map((segment, index) => {
            // Construct the URL for each breadcrumb segment
            const url = `/${segments.slice(0, index + 1).join("/")}`;
            // Determine whether this is the last segment
            const isLastSegment = index === segments.length - 1;

            return (
              <li
                key={segment}
                className={`breadcrumb-item ${isLastSegment ? "active" : ""}`}
              >
                {isLastSegment ? (
                  segment // Display the segment label for the last segment
                ) : (
                  <Link to={url}>{segment}</Link> // Link to the segment for other segments
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </nav>
  );
}

export default Menu;
