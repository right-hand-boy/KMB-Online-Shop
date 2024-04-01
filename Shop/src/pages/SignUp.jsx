// // src/components/SignUp.js

// import React, { useState } from "react";
// import styles from "./SignUp.module.css"; // Importing our CSS Module
// import Header from "../header/Header";
// const SignUp = () => {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "user", // Default role
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("SignUp Submitted", formState);
//     // Here you would usually integrate with a backend service to register the user
//   };

// //   return (
// //     <>
// //       <Header />
// //       <div className={styles.signUpContainer}>
// //         <h2>Sign Up</h2>
// //         <form onSubmit={handleSubmit} className={styles.signUpForm}>
// //           <div className={styles.formGroup}>
// //             <label htmlFor="name">Name</label>
// //             <input
// //               type="text"
// //               id="name"
// //               name="name"
// //               value={formState.name}
// //               onChange={handleChange}
// //               className={styles.formControl}
// //             />
// //           </div>
// //           <div className={styles.formGroup}>
// //             <label htmlFor="email">Email</label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               value={formState.email}
// //               onChange={handleChange}
// //               className={styles.formControl}
// //             />
// //           </div>
// //           <div className={styles.formGroup}>
// //             <label htmlFor="password">Password</label>
// //             <input
// //               type="password"
// //               id="password"
// //               name="password"
// //               value={formState.password}
// //               onChange={handleChange}
// //               className={styles.formControl}
// //             />
// //           </div>
// //           <div className={styles.formGroup}>
// //             <label htmlFor="role">I am signing up as a:</label>
// //             <select
// //               id="role"
// //               name="role"
// //               value={formState.role}
// //               onChange={handleChange}
// //               className={styles.formControl}
// //             >
// //               <option value="user">User</option>
// //               <option value="merchant">Merchant</option>
// //             </select>
// //           </div>
// //           <button type="submit" className={styles.submitButton}>
// //             Sign Up
// //           </button>
// //         </form>
// //       </div>
// //     </>
// //   );
// // };

// // export default SignUp;
import { NavLink } from "react-router-dom";
import Header from "../components/header/Header";
import styles from "./SignUp.module.css";
function SignUp() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.ContainerBox}>
        <div className={styles.signUpcontinar}>
          <div className={styles.toLogin}>
            <h2>welcome back</h2>
            <span>
              to keep connected with us please login with your personal info
            </span>

            <NavLink to="/login">sign in</NavLink>
          </div>
          <div className={styles.signUp}>
            <h1>create Account</h1>
            <div className={styles.social}>
              <a>
                <svg
                  fill="#000000"
                  width="3rem"
                  height="3rem"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
                </svg>
              </a>
              <a>
                <svg
                  fill="#000000"
                  width="3rem"
                  height="3rem"
                  viewBox="-3.5 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                  class="cf-icon-svg"
                >
                  <path d="M3.335 6.498a1.152 1.152 0 0 1-1.248 1.148h-.015a1.15 1.15 0 1 1 .03-2.295 1.147 1.147 0 0 1 1.233 1.147zM.982 8.553h2.206v6.637H.982zm10.165 2.83v3.807H8.941v-3.55c0-.893-.319-1.502-1.12-1.502a1.21 1.21 0 0 0-1.13.807 1.516 1.516 0 0 0-.073.538v3.708H4.41s.03-6.017 0-6.639h2.21v.94l-.016.023h.015V9.49a2.19 2.19 0 0 1 1.989-1.095c1.451 0 2.54.949 2.54 2.988z" />
                </svg>
              </a>
              <a>
                <svg
                  width="3rem"
                  height="3rem"
                  viewBox="0 -4 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>google_plus [#165]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-420.000000, -7443.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M382,7287.70673 L382,7285.82629 L380,7285.82629 L380,7287.70673 L378,7287.70673 L378,7289.58717 L380,7289.58717 L380,7291.4676 L382,7291.4676 L382,7289.58717 L384,7289.58717 L384,7287.70673 L382,7287.70673 Z M376.4,7287.70673 C376.454,7287.70673 376.5,7288.5266 376.5,7288.92055 C376.5,7292.34671 374.058,7295 370.377,7295 C366.852,7295 364,7292.31568 364,7289.00141 C364,7285.6862 366.852,7283 370.377,7283 C372.099,7283 373.539,7283.58105 374.65,7284.55794 L372.919,7286.10648 C372.446,7285.67774 371.616,7285.14276 370.377,7285.14276 C368.2,7285.14276 366.423,7286.76087 366.423,7288.85098 C366.423,7290.94108 368.2,7292.48304 370.377,7292.48304 C372.901,7292.48304 373.849,7290.52738 373.994,7289.58717 L370,7289.58717 L370,7287.70673 L376.4,7287.70673 Z"
                          id="google_plus-[#165]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <span>or use your email for registreation</span>
            <input id="name" type="text" placeholder="Name" />
            <input type="email" id="email" placeholder="Email address" />
            <input type="password" id="password" placeholder="Password" />
            <button>sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
