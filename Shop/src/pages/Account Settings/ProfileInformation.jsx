import styles from "./ProfileInformation.module.css";
import Header from "../../components/header/Header";
import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import { useState } from "react";
import UserDetail from "../../components/main/UserDetail";
function ProfileInformation({
  user = {
    firstname: "biniyam",
    lastname: "kefyalew",
    username: "right hand man",
    profileImage: "",
    email: "biniyamkefyalew1@gmail.com",
    password: "biniyam",
    phonenumber: "+251911290020",
  },
}) {
  const [view, setView] = useState(true);
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.ProfileInformation}>
        <AccountSettingOptions />
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="firstname">first name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              disabled={view}
              value={user.firstname}
              className={styles.input}
              onChange={(e) => {
                user.firstname = e.target.value;
              }}
            />
          </div>{" "}
          <div className={styles.formGroup}>
            <label htmlFor="lastname">last name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              disabled={view}
              value={user.lastname}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="profie">profile Image:</label>
            <input
              type="file"
              id="profile"
              name="profile"
              accept=".jpg,.png"
              disabled={view}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              disabled={view}
              value={user.username}
              name="username"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">email:</label>
            <input
              type="text"
              id="email"
              disabled={view}
              value={user.email}
              name="email"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phonnumber">phone number:</label>

            <div className={styles.phoneNumberInput}>
              <select className={styles.sel}>
                <option value="+251">+251</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
              <input
                type="tel"
                id="phonumber"
                disabled={view}
                value={user.phonenumber}
                name="phonnumber"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">password:</label>
            <input
              type="password"
              id="password"
              disabled={view}
              value={user.password}
              name="password"
              className={styles.input}
            />
          </div>
          <div className={`${styles.formGroup} ${view ? "hidden" : ""}`}>
            <label htmlFor="confirmPassword">confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              disabled={view}
              value={user.password}
              name="confirmPassword"
              className={styles.input}
            />
          </div>
          <button
            type="submit"
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              setView(!view);
            }}
          >
            {view ? "edit" : "update changes"}
          </button>
        </form>
        <UserDetail />
      </div>
    </>
  );
}
export default ProfileInformation;
