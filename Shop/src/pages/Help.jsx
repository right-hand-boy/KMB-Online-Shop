import { useState } from "react";
import Header from "../components/header/Header";
import styles from "./Help.module.css";
import { NavLink } from "react-router-dom";
function Help() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <>
      <Header />
      <div className={styles.ContainerBox}>
        <div div className={styles.box}>
          <div className={styles.infoHelp}>
            <h2>
              balance <span>$12</span>
            </h2>
            <NavLink>my accouunvch</NavLink>
            <h3>Account Settings</h3>
            <div className={styles.option}>
              <h2>Profile Information</h2>
              {/* Add form fields for profile information */}
            </div>
            <div className={styles.option}>
              <h2>Change Password</h2>
              {/* Add form fields for changing password */}
            </div>
          </div>
          <div className={styles.helpBox}>
            <div className={styles.helpNavBar}>
              <p>user</p>
              <input type="search" placeholder="search" />
              <p>
                <svg
                  fill="#000"
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
              <div className={styles.container}>
                <div className={styles.helpAbout}>
                  <h1>Help Center</h1>
                  <p className={styles.description}>
                    Welcome to the KMB Online Shop Help Center! We're here to
                    assist you with any questions or concerns you may have{" "}
                    <br /> regarding your shopping. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. At officia modi ea totam esse
                    nostrum <br />
                    amet, quibusdam magnam voluptate unde optio fugiat, nisi
                    adipisci! Quibusdam fuga possimus praesentium vitae porro.
                  </p>
                </div>
                <h2 className={styles.sectionTitle}>
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className={styles.faqSection}>
                  <div className={styles.faqItem}>
                    <h3
                      className={styles.faqQuestion}
                      onClick={() => setIsOpen1(!isOpen1)}
                    >
                      How do I place an order? ⋁
                    </h3>
                    <p
                      className={`${styles.faqAnswer} ${
                        isOpen1 ? "" : styles.hidden
                      }`}
                    >
                      To place an order, simply browse our products, add items
                      to your cart, and proceed to checkout. Follow the prompts
                      to enter your shipping and payment information to complete
                      your purchase.
                      <br />
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum tempore harum rem facere officiis sequi ea
                      voluptate perferendis sint, soluta odit porro aperiam quos
                      ad? Minus commodi voluptatum eligendi accusamus
                    </p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3
                      className={styles.faqQuestion}
                      onClick={() => setIsOpen2(!isOpen2)}
                    >
                      How can I track my order? ⋁
                    </h3>
                    <p
                      className={`${styles.faqAnswer} ${
                        isOpen2 ? "" : styles.hidden
                      }`}
                    >
                      Once your order has been shipped, you will receive a
                      tracking number via email. You can use this tracking
                      number to monitor the status of your delivery. <br />
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum tempore harum rem facere officiis sequi ea
                      voluptate perferendis sint, soluta odit porro aperiam quos
                      ad? Minus commodi voluptatum eligendi accusamus
                    </p>
                  </div>
                  <div className={styles.faqItem}>
                    <h3
                      className={styles.faqQuestion}
                      onClick={() => setIsOpen3(!isOpen3)}
                    >
                      What payment methods do you accept? ⋁
                    </h3>
                    <p
                      className={`${styles.faqAnswer} ${
                        isOpen3 ? "" : styles.hidden
                      }`}
                    >
                      We accept all major credit cards, PayPal, and other secure
                      payment methods for your convenience. <br />
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum tempore harum rem facere officiis sequi ea
                      voluptate perferendis sint, soluta odit porro aperiam quos
                      ad? Minus commodi voluptatum eligendi accusamus
                    </p>
                  </div>
                </div>
                {/* <div>
          <h4 className={styles.sectionTitle}>Contact Us</h4>
          <p className={styles.description}>
            If you need further assistance or have any other questions, feel
            free to contact our customer service team. We're here to help!
          </p>
          <div className={styles.contactInfo}>
            <p>
              <strong>Email:</strong> support@kmbonlineshop.com
            </p>
            <p>
              <strong>Phone:</strong> +251-911-290-020{" "}
              <span className={styles.socialLink}>
                <li>
                  <svg
                    fill="#000000"
                    height="3rem"
                    width="3rem"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-143 145 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3
	v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2
	c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    fill="#000000"
                    height="3rem"
                    width="3rem"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-143 145 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8
		c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"
                      />
                      <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 	" />
                      <path
                        d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157
		c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"
                      />
                      <path
                        d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8
		c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157
		c27.3,0,49.5,22.2,49.5,49.5V374.7z"
                      />
                    </g>
                  </svg>
                </li>
                <li>
                  <svg
                    fill="#000000"
                    height="3rem"
                    width="3rem"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-143 145 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 	" />
                      <path
                        d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8
		c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1
		V446.8z"
                      />
                    </g>
                  </svg>
                </li>
                <li>
                  <svg
                    fill="#000000"
                    height="3rem"
                    width="3rem"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="-143 145 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2
	c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
	c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
	C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
	c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
	c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="3rem"
                    height="3rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2629 9.3444 8.93015 10.3492 5.43191 11.8733C4.86385 12.0992 4.56628 12.3202 4.53919 12.5363C4.4934 12.9015 4.95073 13.0453 5.57349 13.2411C5.6582 13.2678 5.74598 13.2954 5.83596 13.3246C6.44866 13.5238 7.27284 13.7568 7.70131 13.766C8.08996 13.7744 8.52375 13.6142 9.00266 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.1391 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.3761 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5034 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78393 14.6448 10.8036 15.3168C11.2937 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2078 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8308 18.0694 15.3826 18.0186C15.7033 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6632 17.3816 10.0585 17.5622 8.16098C17.5781 7.99473 17.5582 7.78197 17.5422 7.68858C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0057 7.22234 16.9064 7.22408C16.455 7.23204 15.7626 7.47282 12.43 8.85893Z"
                      fill="#000000"
                    />
                  </svg>
                </li>
              
            </p>
          </div>
        </div> */}
              </div>
              <div className={styles.questions}>
                who is going to give me an answers?
              </div>
              <div className={styles.answers}>
                our beloved online agent will help you with your question
              </div>
            </div>
            <form className={styles.helpSend}>
              <input type="text" placeholder="type your question here" />
              <button>
                <svg
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                  fill="#000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.3938 2.20468C3.70395 1.96828 4.12324 1.93374 4.4679 2.1162L21.4679 11.1162C21.7953 11.2895 22 11.6296 22 12C22 12.3704 21.7953 12.7105 21.4679 12.8838L4.4679 21.8838C4.12324 22.0662 3.70395 22.0317 3.3938 21.7953C3.08365 21.5589 2.93922 21.1637 3.02382 20.7831L4.97561 12L3.02382 3.21692C2.93922 2.83623 3.08365 2.44109 3.3938 2.20468ZM6.80218 13L5.44596 19.103L16.9739 13H6.80218ZM16.9739 11H6.80218L5.44596 4.89699L16.9739 11Z"
                    fill="#000"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
