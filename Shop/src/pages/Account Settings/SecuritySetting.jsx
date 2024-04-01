import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import styles from "./SecuritySetting.module.css";
import Header from "../../components/header/Header";
import UserDetail from "../../components/main/UserDetail";
function SecuritySetting() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.SecuritySetting}>
          <AccountSettingOptions />
          <div className={styles.securitySettingPage}>
            <h1>Security Settings</h1>
            <div className={styles.optionList}>
              <div className={styles.option}>
                <h2>Password</h2>
                <p>**********</p>
              </div>
              <div className={styles.option}>
                <h2>Two-Factor Authentication</h2>
                <p>Enabled</p>
              </div>
              <div className={styles.option}>
                <h2>Security Question</h2>
                <p>What is your favorite color?</p>
              </div>
            </div>
          </div>
          <UserDetail />
        </div>
      </div>
    </>
  );
}

export default SecuritySetting;
