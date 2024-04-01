// 404Page.js

import React from "react";
import styles from "./NotFoundPage .module.css";
const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>
        Oops! The page you are looking for could not be found.
      </p>
      <p className={styles.description}>
        Please check the URL or go back to the <a href="/">homepage</a>.
      </p>
    </div>
  );
};

export default NotFoundPage;
