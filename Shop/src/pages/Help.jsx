import { useState, useRef } from "react";
import Header from "../components/header/Header";
import styles from "./Help.module.css";
import { NavLink } from "react-router-dom";
import src from "/backg.jpg";
import Question from "../components/question/Question";

function Help() {
  const bottomRef = useRef(null);
  const faq1 = useRef(null);
  const faq2 = useRef(null);
  const faq3 = useRef(null);
  const [open1, setOpen1] = useState(false);
  const [question, setQuestion] = useState("");
  const [latest, setLatest] = useState([]);
  function handleQuestionHistory(e) {
    e.preventDefault();
    if (!latest.includes("?")) {
      setLatest(() => [...latest, `${question}?`]);
      setQuestion(() => "");
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
      return;
    }
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
    setLatest(() => [...latest, question]);
    setQuestion(() => "");
  }
  // const [latest1, setLatest1] = useState("...");
  // const [latest2, setLatest2] = useState("...");
  // const [latest3, setLatest3] = useState("...");
  // function handleQuestionHistory(e) {
  //   e.preventDefault();
  //   setLatest3(latest2);
  //   setLatest2(latest1);
  //   setLatest1(() => TruncateText(question));
  //   setQuestion(() => "");

  // }
  function TruncateText(text = []) {
    if (text.length <= 34) {
      return text;
    }
    const texts = `${text.slice(0, 31)}...?`;
    return texts;
  }
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>

      <div className={styles.box}>
        <div className={styles.infoHelp}>
          <h3>
            balance <span>$12</span>
          </h3>
          <div className={styles.history}>
            <h4>Frequently Asked Questions (FAQ)</h4>
            <li
              onClick={() => {
                setOpen1(1);

                faq1.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How do I place an order?
            </li>
            <li
              onClick={() => {
                setOpen1(2);

                faq2.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How can I track my order?
            </li>
            <li
              onClick={() => {
                setOpen1(3);
                faq3.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              What Payment Methods Do You Accept?
            </li>
          </div>
          <div className={styles.history}>
            <h4>last 7 days queation</h4>
            <li className={styles.latest1}>
              {latest[latest.length - 1]
                ? TruncateText(latest[latest.length - 1])
                : "..."}
            </li>
            <li className={styles.latest2}>
              {latest[latest.length - 2]
                ? TruncateText(latest[latest.length - 2])
                : "..."}
            </li>
            <li className={styles.latest3}>
              {latest[latest.length - 3]
                ? TruncateText(latest[latest.length - 3])
                : "..."}
            </li>
          </div>
          <NavLink to="/account" className={styles.account}>
            <h3>account seeting</h3>
            <li>Profile Information</li>
            <li>Manage account</li>
          </NavLink>
        </div>
        <div className={styles.helpBox}>
          <div className={styles.helpNavBar}>
            <div className={styles.usersInfo}>
              <p className={styles.profile}>
                <img src={src} alt="profile pictuer" />
              </p>
              <p>user</p>
            </div>

            <input type="search" placeholder="search" />
            <p>
              <svg
                fill="#fff"
                width="3rem"
                height="3rem"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M388.8 896.4v-27.198c.6-2.2 1.6-4.2 2-6.4 8.8-57.2 56.4-102.4 112.199-106.2 62.4-4.4 115.2 31.199 132.4 89.199 2.2 7.6 3.8 15.6 5.8 23.4v27.2c-.6 1.8-1.6 3.399-1.8 5.399-8.6 52.8-46.6 93-98.6 104.4-4 .8-8 2-12 3h-27.2c-1.8-.6-3.6-1.6-5.4-1.8-52-8.4-91.599-45.4-103.6-96.8-1.2-5-2.6-9.6-3.8-14.2zm252.4-768.797l-.001 27.202c-.6 2.2-1.6 4.2-1.8 6.4-9 57.6-56.8 102.6-113.2 106.2-62.2 4-114.8-32-131.8-90.2-2.2-7.401-3.8-15-5.6-22.401v-27.2c.6-1.8 1.6-3.4 2-5.2 9.6-52 39.8-86 90.2-102.2 6.6-2.2 13.6-3.4 20.4-5.2h27.2c1.8.6 3.6 1.6 5.4 1.8 52.2 8.6 91.6 45.4 103.6 96.8 1.201 4.8 2.401 9.4 3.601 13.999zm-.001 370.801v27.2c-.6 2.2-1.6 4.2-2 6.4-9 57.4-58.6 103.6-114.6 106-63 2.8-116.4-35.2-131.4-93.8-1.6-6.2-3-12.4-4.4-18.6v-27.2c.6-2.2 1.6-4.2 2-6.4 8.8-57.4 58.6-103.601 114.6-106.2 63-3 116.4 35.2 131.4 93.8 1.6 6.4 3 12.6 4.4 18.8z" />
              </svg>
            </p>
          </div>
          <div className={styles.chatBox}>
            <div className={styles.helpAbout}>
              <h1>Help Center</h1>
              <div className={styles.description}>
                <p>
                  Welcome to the KMB Online Shop Help Center! We're here to
                  assist you with any questions or concerns you may have
                  regarding your shopping.
                </p>
                <p>
                  If you need further assistance or have any other questions,
                  feel free to contact our customer service team. We're here to
                  help!
                </p>
                <div className={styles.navlink}>
                  <p>something</p>
                  <p>something</p>
                  <p>something</p>
                  <p>something</p>
                </div>
              </div>
              <div className={styles.faqSection}>
                <div className={styles.faqItem} ref={faq1}>
                  <h3
                    className={`${styles.faqQuestion} ${
                      open1 === 1 ? "" : styles.hidden
                    } `}
                  >
                    How do I place an order?
                  </h3>
                  <p
                    className={`${styles.faqAnswer} ${
                      open1 === 1 ? "" : styles.hidden
                    }`}
                  >
                    To place an order, simply browse our products, add items to
                    your cart, and proceed to checkout. Follow the prompts to
                    enter your shipping and payment information to complete your
                    purchase.
                  </p>
                </div>
                <div className={styles.faqItem} ref={faq2}>
                  <h3
                    className={`${styles.faqQuestion} ${
                      open1 === 2 ? "" : styles.hidden
                    } `}
                  >
                    How can I track my order?
                  </h3>
                  <p
                    className={`${styles.faqAnswer} ${
                      open1 === 2 ? "" : styles.hidden
                    }`}
                  >
                    Once your order has been shipped, you will receive a
                    tracking number via email. You can use this tracking number
                    to monitor the status of your delivery.
                  </p>
                </div>
                <div className={styles.faqItem} ref={faq3}>
                  <h3
                    className={`${styles.faqQuestion} ${
                      open1 === 3 ? "" : styles.hidden
                    } `}
                  >
                    What payment methods do you accept?
                  </h3>
                  <p
                    className={`${styles.faqAnswer} ${
                      open1 === 3 ? "" : styles.hidden
                    } `}
                  >
                    We accept all major credit cards, PayPal, and other secure
                    payment methods for your convenience.
                  </p>
                </div>
              </div>
            </div>
            <div id="questions">
              {latest.map((question) => (
                <Question question={question} />
              ))}
              <div ref={bottomRef} className={styles.last}></div>
            </div>
          </div>
          <form
            className={styles.helpSend}
            onSubmit={(e) => handleQuestionHistory(e)}
          >
            <input
              value={question}
              type="text"
              placeholder="type your question here"
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
            <button onClick={(e) => handleQuestionHistory(e)}>
              <svg
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.3938 2.20468C3.70395 1.96828 4.12324 1.93374 4.4679 2.1162L21.4679 11.1162C21.7953 11.2895 22 11.6296 22 12C22 12.3704 21.7953 12.7105 21.4679 12.8838L4.4679 21.8838C4.12324 22.0662 3.70395 22.0317 3.3938 21.7953C3.08365 21.5589 2.93922 21.1637 3.02382 20.7831L4.97561 12L3.02382 3.21692C2.93922 2.83623 3.08365 2.44109 3.3938 2.20468ZM6.80218 13L5.44596 19.103L16.9739 13H6.80218ZM16.9739 11H6.80218L5.44596 4.89699L16.9739 11Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Help;
