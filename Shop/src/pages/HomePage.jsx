import styles from "./HomePage.module.css";
// HomePage.jsx
import Footer from "../components/footer/Footer";
import React, { useState } from "react";
// import Categories from "./Categories"; // Assuming you have a Categories component from the previous example
import Header from "../components/header/Header";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: true, click: 2 };
    case "save":
      return { ...state, question: action.payload };
    case "send":
      // const legth = state.que.length;
      return {
        ...state,
        isSent: true,
        click: 3,
      };
    case "error ":
      return { ...state, typeError: true };
    case "close":
      return { ...state, isOpen: false, isSent: false, click: 1 };
    case "email":
      return { ...state, email: action.payload };
  }
}
const initialState = {
  isOpen: false,
  question: "",
  isSent: false,
  click: 1,
  email: "",
  typeError: false,
};
function HomePage() {
  const [{ isOpen, question, isSent, click, email, typeError }, dispatch] =
    useReducer(reducer, initialState);
  function handle(e) {
    e.preventDefault();
    if (click == 1) {
      dispatch({ type: "open" });
    } else if (click == 2) {
      if (question && email) {
        dispatch({ type: "send" });
      } else if (question || email) {
        dispatch({ type: "error" });
      } else {
        dispatch({ type: "close" });
      }
    } else if (click == 3) {
      dispatch({ type: "close" });
      document.querySelectorAll("input").value = "";
      document.querySelectorAll("textArea").value = "";
    }
  }
  // const [isOpen, setIsOpen] = useState(false);
  // const [question, setQuestion] = useState("");

  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.homePage}>
          <div className={styles.hero}>
            <h1>get your first order with free delivery</h1>
            <p>
              Discover endless shopping possibilities at KMB online shop! From
              trendy fashion pieces to must-have accessories, we have everything
              you need to elevate your style. Join the fashion-forward community
              at KMB and shop till you drop
            </p>
            <button className={styles.shopNow}>shop now</button>
          </div>
          {/* <img src={img} /> */}
        </div>
      </div>
      <div className={styles.askForm}>
        <form
          onSubmit={(e) => handle(e)}
          className={`${styles.ask}  ${isOpen ? "" : styles.hidden}`}
        >
          <textarea
            type="text"
            placeholder="write your question here"
            onChange={(e) => {
              // if (e.target.value.length) {
              const que = e.target.value;
              dispatch({ type: "save", payload: que });
              // } else {
              //   dispatch({ type: "error" });
              // }
            }}
          />
          <input
            type="email"
            // className={`  ${isSent ? "" : styles.hidden}`}

            onChange={(e) => {
              const emm = e.target.value;
              dispatch({ type: "email", payload: emm });
            }}
            placeholder="enter your email addres for the responce"
          />
          <p className={`  ${isSent ? styles.messageSucces : styles.hidden}`}>
            your question sent succesfully.
          </p>
          <p className={`  ${typeError ? styles.messageError : styles.hidden}`}>
            please fill all required field
          </p>
        </form>

        <button
          className={styles.askButton}
          // onClick={(e) => setIsOpen(!isOpen)}
          onClick={(e) => handle(e)}
        >
          ask
        </button>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
