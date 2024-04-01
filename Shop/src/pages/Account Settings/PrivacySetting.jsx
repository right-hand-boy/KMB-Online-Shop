import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import styles from "./PrivacySetting.module.css";
import Header from "../../components/header/Header";
import UserDetail from "../../components/main/UserDetail";
function PrivacySetting() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.PrivacySetting}>
        <AccountSettingOptions />
        <div className={styles.privacySettingPage}>
          <h1>Privacy Settings</h1>
          <div className={styles.optionList}>
            <div className={styles.option}>
              <h2>Public Profile</h2>
              <p>Your profile is visible to everyone</p>
            </div>
            <div className={styles.option}>
              <h2>Notification Settings</h2>
              <p>Receive notifications for updates and activities</p>
            </div>
            <div className={styles.option}>
              <h2>Data Sharing</h2>
              <p>Share data with third-party applications</p>
            </div>
          </div>
        </div>
        <UserDetail />
      </div>
    </>
  );
}
export default PrivacySetting;
