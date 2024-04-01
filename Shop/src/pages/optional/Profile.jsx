import styles from "./Profile.module.css";
import Header from "../components/header/Header";
import AccountSettingOptions from "../components/main/AccountSettingOptions";
function Profile() {
  return (
    <>
      <Header />
      <div className={styles.Profile}>
        <AccountSettingOptions />
        <div>
          <div>
            <label htmlFor="firstname">first name</label>
            <input type="text" id="firstname" placeholder="biniyam" />
            <label htmlFor="lastname">last name</label>
            <input type="text" id="lastname" disabled placeholder="kefyalew" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
