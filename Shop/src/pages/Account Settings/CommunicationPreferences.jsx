import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import Header from "../../components/header/Header";
import styles from "./CommunicationPreferences.module.css";
import UserDetail from "../../components/main/UserDetail";
function CommunicationPreferences() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.CommunicationPreferences}>
        <AccountSettingOptions />
        <div className={styles.container}>
          <h1>Communication Preferences</h1>
          <div className={styles.options}>
            <div className={styles.option}>
              <input type="checkbox" id="email" />
              <label htmlFor="email">Email Notifications</label>
            </div>
            <div className={styles.option}>
              <input type="checkbox" id="sms" />
              <label htmlFor="sms">SMS Notifications</label>
            </div>
            <div className={styles.option}>
              <input type="checkbox" id="push" />
              <label htmlFor="push">Push Notifications</label>
            </div>
          </div>
        </div>
        <UserDetail />
      </div>
    </>
  );
}

export default CommunicationPreferences;
