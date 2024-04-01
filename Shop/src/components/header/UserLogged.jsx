import { useState } from "react";
import styles from "./UserLogged.module.css";
import { NavLink } from "react-router-dom";
import src from "/backg.jpg";
function UserLogged() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.user}>
      <nav className={styles.logged}>
        <NavLink to="/user/accountSetting" className={styles.userLink}>
          <li className={styles.profile}>
            <img src={src} alt="profile pictuer" />
          </li>
          <li className={styles.user}>user</li>
        </NavLink>
        <li className={styles.option} onClick={() => setOpen(() => !open)}>
          <svg
            fill="#fff"
            width="2rem"
            height="2rem"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M388.8 896.4v-27.198c.6-2.2 1.6-4.2 2-6.4 8.8-57.2 56.4-102.4 112.199-106.2 62.4-4.4 115.2 31.199 132.4 89.199 2.2 7.6 3.8 15.6 5.8 23.4v27.2c-.6 1.8-1.6 3.399-1.8 5.399-8.6 52.8-46.6 93-98.6 104.4-4 .8-8 2-12 3h-27.2c-1.8-.6-3.6-1.6-5.4-1.8-52-8.4-91.599-45.4-103.6-96.8-1.2-5-2.6-9.6-3.8-14.2zm252.4-768.797l-.001 27.202c-.6 2.2-1.6 4.2-1.8 6.4-9 57.6-56.8 102.6-113.2 106.2-62.2 4-114.8-32-131.8-90.2-2.2-7.401-3.8-15-5.6-22.401v-27.2c.6-1.8 1.6-3.4 2-5.2 9.6-52 39.8-86 90.2-102.2 6.6-2.2 13.6-3.4 20.4-5.2h27.2c1.8.6 3.6 1.6 5.4 1.8 52.2 8.6 91.6 45.4 103.6 96.8 1.201 4.8 2.401 9.4 3.601 13.999zm-.001 370.801v27.2c-.6 2.2-1.6 4.2-2 6.4-9 57.4-58.6 103.6-114.6 106-63 2.8-116.4-35.2-131.4-93.8-1.6-6.2-3-12.4-4.4-18.6v-27.2c.6-2.2 1.6-4.2 2-6.4 8.8-57.4 58.6-103.601 114.6-106.2 63-3 116.4 35.2 131.4 93.8 1.6 6.4 3 12.6 4.4 18.8z" />
          </svg>
        </li>
      </nav>
      <nav className={`${styles.optionList} ${open ? "" : styles.hidden}`}>
        <li>account setting</li>
        <li>Profile</li>
        <li>dashboard</li>
        <li>dashboard</li>
        <li>dashboard</li>
      </nav>
    </div>
  );
}

export default UserLogged;
