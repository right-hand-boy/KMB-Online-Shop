import { NavLink } from "react-router-dom";
import styles from "./PrimaryNavigation.module.css";
import UserLogged from "./UserLogged";
import LogSign from "./LogSign";
import { useState } from "react";
function PrimaryNavigation() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // You can implement logic here to change the language in your application
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    // You can implement logic here to change the currency in your application
  };
  const logged = true;
  return (
    <nav className={styles.nav}>
      <li>
        <select
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          {/* Add more language options as needed */}
        </select>

        <select
          id="currency"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currency options as needed */}
        </select>
      </li>
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

      {logged ? <UserLogged /> : <LogSign />}
    </nav>
  );
}

export default PrimaryNavigation;
