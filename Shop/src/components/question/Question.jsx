import React from "react";
import ReactDOM from "react-dom";
import styles from "./Question.module.css";
// Define a functional component using JSX
function Question({ question }) {
  return (
    <>
      <div className={styles.questions}>
        {question} {question.includes("?") ? "" : "?"}
      </div>
      <div className={styles.answers}>...</div>
    </>
  );
}

// Render the component to the DOM
export default Question;
